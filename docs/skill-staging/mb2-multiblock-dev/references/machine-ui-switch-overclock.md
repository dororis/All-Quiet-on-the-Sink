# MB2/LDLib2 机器 UI、开关、超频与 Jade 实践参考

> 适用：Minecraft 1.21.1、Multiblocked2 21.1.x、LDLib2 2.x、KubeJS 2101.7.x。
>
> 来源：`All Quiet on the Sink` 整合包中的 `ui.js`、`switch.js`、动态并行/热值脚本、Jade 双端注册和 0 耐久槽位脚本。

## 何时使用

用户要求以下任一内容时读取本参考：

- MBD2 机器 UI 的文本/状态绑定
- `power_switch`、机器总开关、多人同步
- 热值驱动的速度/并行超频
- Jade 显示机器状态
- 按机器事件处理槽位耐久、输入消耗
- 调试 LDLib2/Rhino 的 UI 绑定错误

## 1. UI：先区分 Label 与 TextElement

| 需求 | 组件 |
|---|---|
| 动态文本、状态绑定 | `Label` |
| 静态文本 | `TextElement` |

`TextElement` 没有 `bindDataSource()`。如果调用时报：

```text
Cannot find function bindDataSource in object text{text}
```

让用户把 UI 定义中的目标组件改为 `Label`，并确认元素 ID 与 `ui.selectId(id)` 一致。

推荐模式：

```js
const MySupplierDataSource = Java.loadClass(
    'com.lowdragmc.lowdraglib2.gui.sync.bindings.impl.SupplierDataSource'
)

MBDMachineEvents.onUI('example:machine', wrapper => {
    const { machine, ui } = wrapper.event
    const label = ui.selectId('text').findFirst().orElse(null)
    if (label === null) return

    label.textStyle(style => {
        style.fontSize(8.0)
        style.textShadow(true)
        style.lineSpacing(2.0)
        style.adaptiveHeight(true)
    })

    label.bindDataSource(MySupplierDataSource.of(() => {
        const data = machine.customData
        return Component.literal(
            '§7状态: §e' + data.getString('state') + '\n' +
            '§7速度: §b' + Number(data.getFloat('speed')).toFixed(2) + 'x'
        )
    }))
})
```

规则：

- 每台机器的 UI 状态先由服务端写入 `machine.customData`，UI/Jade 只读同步字段。
- 不要直接依赖客户端侧 `isFormedValid()`、`getWaitingReason()` 等运行态做最终显示。
- 全局 Java 类变量使用脚本唯一名；直接 `const SupplierDataSource = ...` 可能报 `redeclaration of var`。
- `Label.bind(...)` 在当前 Rhino 桥接里不可靠；动态文本用 `bindDataSource`。
- `Switch` 使用 `bind(DataBindingBuilder.bool(...).build())`。

## 2. 开关：默认值、持久化、服务端裁决

推荐结构：

```js
function isPowerSwitchOn(machine) {
    if (!machine.customData.contains('power_switch')) return true
    return machine.customData.getBoolean('power_switch')
}

MBDMachineEvents.onUI(machineId, wrapper => {
    const { machine, ui } = wrapper.event
    const powerSwitch = ui.selectId('power_switch').findFirst().orElse(null)
    if (powerSwitch === null) return

    const binding = DataBindingBuilder.bool(
        () => isPowerSwitchOn(machine),
        value => {
            const updated = machine.customData.copy()
            updated.putBoolean('power_switch', value)
            machine.setCustomData(updated)
            machine.recipeLogic.setWorkingEnabled(value)
        }
    ).build()

    powerSwitch.bind(binding)
})

MBDMachineEvents.onBeforeRecipeWorking(machineId, wrapper => {
    if (!isPowerSwitchOn(wrapper.event.machine)) {
        wrapper.cancel()
    }
})
```

- 没有 key 时默认开启，避免旧存档/新机器首次加载默认停机。
- `customData` 是权威持久化；不要只改 UI 局部变量。
- `onBeforeRecipeWorking` 是服务端最终裁决。
- 开关不要用 `onTick` 轮询。
- `setOnSwitchChanged` 只表示开关变化监听；它不是持久化方案。若使用，必须配合绑定同步或服务端状态更新。

多人问题诊断：

1. getter 两端是否读同一 key。
2. 缺失值时两端是否都返回默认 `true`。
3. setter 是否通过 `DataBindingBuilder` 的同步机制写回，而不是只改远端对象。
4. `setWorkingEnabled` 是否在正确的权威端执行。
5. 即使 UI 状态过期，`onBeforeRecipeWorking` 是否仍能阻止机器工作。

## 3. 热值超频与动态并行

事件分工：

| 事件 | 用途 |
|---|---|
| `onBeforeRecipeModify` | 临时应用动态 modifier/并行 |
| `onAfterRecipeModify` | 恢复原始 modifier/并行 |
| `onTick` | 更新热值、状态字段等低频机器状态 |
| `onRecipeWorking` | 每个工作 tick 的输入/耐久检查 |
| `onBeforeRecipeWorking` | 开关/条件拦截 |

速度公式示例：

```text
speed = 1 + heat / maxHeat * (bonusAtMaxHeat - 1)
```

动态并行示例：

```js
function getDesiredParallel(machine) {
    const heat = machine.customData.getFloat('heat')
    const speed = 1.0 + (heat / 24000.0) * (8.0222 - 1.0)
    if (speed >= 7.95) return 8
    return Math.max(1, Math.min(8, Math.floor(speed)))
}
```

临时修改 recipe modifier：

```js
parallelModifier.setMultiplier(1.0)
parallelModifier.setAddition(parallel - 1)
```

恢复时写回原始 `multiplier/addition`。如果同一定义存在多个基础并行变体，按机器实例缓存原值，不要只用单个全局变量。

热值变化后，若已有 last recipe，调用：

```js
logic.markLastRecipeDirty()
```

否则可能出现热值/UI已变化但配方未重算。

防满速闪烁：接近上限时设置明确阈值并钳制，例如 `>= 7.95` 直接视为满速/满并行，不要只依赖浮点相等比较。

## 4. Jade

服务端数据提供器放 `startup_scripts`：

```js
JadeEvents.onCommonRegistration(event => {
    event.blockDataProvider('aqs:status', MachineBlockEntity)
        .setCallback((tag, accessor) => {
            const machine = accessor.blockEntity.getMetaMachine()
            tag.putString('state', machine.customData.getString('state'))
            tag.putFloat('speed', machine.customData.getFloat('speed'))
        })
})
```

客户端展示放 `client_scripts`：

```js
JadeEvents.onClientRegistration(event => {
    event.block('aqs:status', MBDMachineBlock)
        .tooltip((tooltip, accessor, config) => {
            const data = accessor.serverData
            tooltip.add(Component.literal('§7状态: §f' + data.getString('state')))
        })
})
```

不要把服务端 provider 和客户端 tooltip 放在同一个加载阶段。tooltip 回调只读 `serverData`，不修改机器。

## 5. 槽位耐久/输入销毁

- 每个工作 tick 的即时检查优先 `onRecipeWorking`。
- `onConsumeInputsAfterWorking` 可作为最终扣除兜底，但不同 MB2 版本/机器是否发送该事件需在运行时验证。
- `onAfterRecipeWorking` 不适合每个工作 tick 的即时检查。
- Trait 可能在控制器自身，也可能在多方块部件的 `getRecipeLogicTraits()` 中。
- 先扫描并记录槽位，再统一 `setStackInSlot(slot, ItemStack.EMPTY)`；不要在遍历中修改存储。
- 同时检查物品非空、可损坏、`maxDamage > 0`、`damage >= maxDamage` 和目标 item ID。

## 6. 资源与模型路径

- 方块模型：`kubejs/assets/<namespace>/models/block/...json`
- 物品模型：`kubejs/assets/<namespace>/models/item/...json`
- 纹理：`kubejs/assets/<namespace>/textures/block|item/...png`
- 物品栏显示方块模型时，物品模型应 `parent` 到对应方块模型，并设置 GUI display；不要把 `.json` 放进 `textures/item/`。
- 方块注册可用 `.parentModel(...)`；若物品模型已经继承方块模型，不要再让注册脚本强行指向错误 item 纹理。

## 7. 调试顺序

1. 看 `logs/kubejs/startup.log`、`server.log`、`client.log` 的第一处异常。
2. `node --check` 只能检查 JS 语法，不验证 Java/Rhino/MB2 语义。
3. UI 文本不变先确认组件类型、元素 ID、数据源字段，再重开 UI/重启验证。
4. 开关多人异常先确认权威状态和绑定同步方向，再检查服务端 `onBeforeRecipeWorking`。
5. 热值速度不更新先确认 `markLastRecipeDirty()`。
6. Jade 无数据先确认服务端 provider 和客户端 tooltip 是否分别注册。