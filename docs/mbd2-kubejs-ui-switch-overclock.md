# MB2 + KubeJS 机器进阶实践：UI、开关、超频/热值与 Jade

> 适用环境：Minecraft 1.21.1 / NeoForge / KubeJS 2101.7.2-build.368 / Multiblocked2 21.1.2 / LDLib2 2.2.39.a。
>
> 本文基于当前整合包 `All Quiet on the Sink` 的实际脚本整理，不是通用教程。重点是记录已经验证过的写法、事件触发位置和踩坑。

## 0. 源文件索引

| 主题 | 当前文件 |
|---|---|
| 机器 UI 文本绑定 | `kubejs/server_scripts/event/ui.js` |
| 电源开关 | `kubejs/server_scripts/event/switch.js` |
| 动态并行 | `kubejs/server_scripts/event/apotheosis_slayer_parallel.js` |
| 热值与状态同步 | `kubejs/server_scripts/event/apotheosis_slayer_status.js` |
| 0 耐久输入销毁 | `kubejs/server_scripts/event/durability_destroy.js` |
| Jade 服务端数据 | `kubejs/startup_scripts/apotheosis_slayer_jade.js` |
| Jade 客户端展示 | `kubejs/client_scripts/apotheosis_slayer_jade.js` |
| 控制器方块注册 | `kubejs/startup_scripts/block/apothsis_slayer_factory.js` |
| 方块/物品模型 | `kubejs/assets/kubejs/models/` |
| MBD2 机器与配方定义 | `ldlib2/assets/mbd2/multiblock/`、`ldlib2/assets/mbd2/recipe_type/` |

## 1. KubeJS 文件夹职责与加载阶段

### 1.1 目录职责

| 目录 | 用途 | 典型 API |
|---|---|---|
| `kubejs/startup_scripts/` | 注册方块、物品、气体、Jade 服务端数据提供器 | `StartupEvents.registry`、`JadeEvents.onCommonRegistration`、`MBDRegistryEvents` |
| `kubejs/server_scripts/event/` | 机器生命周期、配方工作、UI 交互、服务端状态 | `MBDMachineEvents.*`、`UIEvents` |
| `kubejs/server_scripts/recipe/` | KubeJS 配方增删改 | `ServerEvents.recipes` |
| `kubejs/server_scripts/remove/` | 删除原模组配方 | `event.remove({...})` |
| `kubejs/server_scripts/loot/` | 战利品表修改 | LootJS / KubeJS 战利品事件 |
| `kubejs/client_scripts/` | 客户端显示、Jade tooltip、JEI 隐藏 | `JadeEvents.onClientRegistration`、`RecipeViewerEvents` |
| `kubejs/assets/` | 模型、纹理、语言文件 | `models/block`、`models/item`、`textures/block`、`textures/item` |
| `kubejs/data/` | 数据包 JSON，如配方、loot table、data map | 原版/MOD 数据包目录结构 |
| `ldlib2/assets/mbd2/` | MBD2 编辑器导出的机器/配方类型定义 | `.mb`、`.sm`、`.rt` 文件 |

### 1.2 加载阶段规则

- **Startup**：注册注册表对象和 Jade 的通用数据提供器。这里不应该写只应在世界加载后执行的逻辑。
- **Server**：配方、机器事件、状态同步、服务端 UI 交互。绝大多数 `MBDMachineEvents` 都放这里。
- **Client**：只放客户端视觉、Jade tooltip 展示、Recipe Viewer 隐藏等逻辑。
- **Reload/重启差异**：脚本 reload 能重载许多 server/client 脚本；注册类脚本或机器定义变化通常要重启游戏。

## 2. MBD2 机器 UI：文本状态绑定

### 2.1 `Label` 和 `TextElement` 的分工

这是当前项目最重要的 UI 结论之一：

| 组件 | 能否 `bindDataSource()` | 适合用途 |
|---|---|---|
| `TextElement` | 不能 | 静态文本、手工 `setText()` |
| `Label` | 能 | 动态文本、机器状态、速度、并行数 |

`TextElement` 可用方法包括 `setText()`、`getText()`、`textStyle()`、`recompute()`。
`Label` 继承 `TextElement`，并额外实现 `IBindable<Component>`，所以有 `bindDataSource()` 和 `unbindDataSource()`。

错误写法会直接报：

```text
Cannot find function bindDataSource in object text{text}
```

这通常说明 UI 中的 `text` 组件实际是 `TextElement`，而不是 `Label`。需要回到 MBD2 编辑器的 UI 定义，把目标组件改成 `Label`，或者在代码中确认选中对象的 Java 类型。

### 2.2 当前可用写法

当前 `ui.js` 的核心模式：

```js
const SlayerSupplierDataSource = Java.loadClass(
    'com.lowdragmc.lowdraglib2.gui.sync.bindings.impl.SupplierDataSource'
)

MBDMachineEvents.onUI('mbd2:apotheosis_slayer_factory', wrapper => {
    const { machine, ui } = wrapper.event
    if (!machine || !ui) return

    const statusLabel = ui.selectId('text').findFirst().orElse(null)
    if (statusLabel === null) {
        console.warn('Missing UI element #text')
        return
    }

    statusLabel.textStyle(style => {
        style.fontSize(8.0)
        style.textShadow(true)
        style.lineSpacing(2.0)
        style.adaptiveHeight(true)
    })

    const source = SlayerSupplierDataSource.of(() => {
        const data = machine.customData
        return Component.literal(
            '§7结构: ' + (data.getBoolean('slayer_formed') ? '§a已成型' : '§c未成型') + '\n' +
            '§7状态: §e' + data.getString('slayer_state') + '\n' +
            '§7速度效率: §b' + Number(data.getFloat('slayer_speed')).toFixed(2) + 'x\n' +
            '§7并行数: §b' + data.getInt('slayer_parallel') + '\n' +
            '§7耗电效率: §b' + data.getInt('slayer_energy') + ' FE/t'
        )
    })

    statusLabel.bindDataSource(source)
})
```

### 2.3 状态数据契约

当前 UI/Jade 使用 `machine.customData` 作为跨端可读的状态载体：

| Key | 类型 | 含义 |
|---|---|---|
| `heat` | float | 机器当前热值 |
| `slayer_idle_ticks` | int | 停机后的冷却延迟计数 |
| `slayer_formed` | boolean | 结构是否成型 |
| `slayer_state` | string | 已成型、运行中、空闲、电力不足、输出空间不足等 |
| `slayer_speed` | float | 当前显示速度倍率 |
| `slayer_parallel` | int | 当前显示并行数 |
| `slayer_energy` | int | 当前显示耗电效率 |

读取 `customData` 前必须先判断 key 是否存在，或者确保服务端状态脚本会稳定写入：

```js
const value = machine.customData.contains('slayer_state')
    ? machine.customData.getString('slayer_state')
    : '空闲'
```

### 2.4 状态来源必须权威

不要假设客户端 UI 能直接可靠读取服务端机器运行状态。当前约定是：

1. 服务端状态脚本计算并写入 `machine.customData`。
2. UI 和 Jade 只读取这些同步字段。
3. 不要在客户端直接依赖 `isFormedValid()`、`getWaitingReason()` 等运行态对象来决定最终显示。

### 2.5 Rhino/KubeJS 踩坑

- 不要声明全局 `const SupplierDataSource`。会和 KubeJS/其他脚本的全局名冲突，报 `redeclaration of var SupplierDataSource`。使用唯一名，例如 `SlayerSupplierDataSource`。
- `Label.bind(...)` 在当前 Java/Rhino 桥接里不可靠。动态文本优先 `bindDataSource(SupplierDataSource.of(...))`。
- `Switch` 可以使用 `bind(DataBindingBuilder.bool(...).build())`，这和 `Label` 的绑定接口不同。
- `selectId('text')` 找不到时不会自动创建组件；必须先在 MBD2 编辑器 UI 里放好并设置 ID。
- 修改 UI 代码后如果仍看到旧文本，先关闭并重新打开机器 UI；必要时重启客户端再验证。
- 组件样式和布局对象是 Java 对象，Rhino 中优先使用文档列出的 setter 或 `textStyle(style => ...)`。

## 3. 电源开关：默认开启、持久化与服务端裁决

### 3.1 当前实现

`switch.js` 对多个机器批量注册：

```js
const POWER_SWITCH_MACHINES = [
    'mbd2:compact_god_slayer',
    'mbd2:apotheosis_slayer_factory',
    'mbd2:rainbow_generator',
    'mbd2:frame_sandblaster',
    'mbd2:ore_generator',
    'mbd2:dimensional_stabilimentum'
]

function registerPowerSwitch(machineId) {
    const switchId = 'power_switch'
    const dataKey = 'power_switch'

    function isPowerSwitchOn(machine) {
        if (!machine.customData.contains(dataKey)) return true
        return machine.customData.getBoolean(dataKey)
    }

    MBDMachineEvents.onUI(machineId, wrapper => {
        const { machine, ui } = wrapper.event
        const powerSwitch = ui.selectId(switchId).findFirst().orElse(null)
        if (powerSwitch === null) return

        const binding = DataBindingBuilder.bool(
            () => isPowerSwitchOn(machine),
            value => {
                const updated = machine.customData.copy()
                updated.putBoolean(dataKey, value)
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
}

POWER_SWITCH_MACHINES.forEach(registerPowerSwitch)
```

### 3.2 为什么默认开启

没有保存过 `power_switch` 时，`isPowerSwitchOn(machine)` 返回 `true`。只有玩家手动关闭后，NBT 里才会出现 `power_switch=false`。

这个规则避免了新增机器或旧存档首次加载时默认停机。

### 3.3 事件分工

- `onUI`：绑定开关显示和点击后的同步值。
- `onBeforeRecipeWorking`：每次配方工作前做最后判定；关闭时 `wrapper.cancel()`。
- `onTick`：不要用来轮询开关状态。开关是离散状态，应该事件驱动。

### 3.4 多人环境检查清单

如果出现“玩家 A 切换后，玩家 B 无法再切换”：

1. 开关的权威值必须是 `customData.power_switch`，不要只改 UI 本地布尔值。
2. getter 在客户端和服务端必须读取同一个逻辑 key；缺失时都返回 `true`。
3. setter 必须通过 `DataBindingBuilder.bool` 的同步机制写回，不要在远端 UI 里直接调用只属于服务端的逻辑。
4. `machine.recipeLogic.setWorkingEnabled(value)` 应该由服务端权威状态驱动；如果绑定层的远端 setter 不能保证执行侧，应该改为由服务端 `onCustomDataUpdate`/机器事件统一处理。
5. `onBeforeRecipeWorking` 仍然要保留服务端取消逻辑，它比 UI 显示更权威。
6. `setOnSwitchChanged` 可以作为单侧 UI 变化监听器，但它本身不等于持久化；必须配合绑定或服务端同步。

推荐原则：**UI 绑定负责交互和显示，`customData` 负责持久化，工作前事件负责最终裁决。**

## 4. 热值超频与动态并行

### 4.1 当前参数

机器：`mbd2:apotheosis_slayer_factory`

| 参数 | 当前值 |
|---|---:|
| 最大热值 `MAX_HEAT` | `24000.0` |
| 满热倍率 `BONUS_AT_MAX_HEAT` | `8.0222` |
| 最大动态并行 `MAX_PARALLEL` | `8` |
| 停机冷却延迟 | `5 tick` |
| 冷却速度 | `8.0 / tick` |
| 基础耗电基数 | `4096 FE/t` |

速度公式：

```text
speed = 1 + heat / maxHeat * (bonusAtMaxHeat - 1)
```

在满热时理论值是 `8.0222`，UI 显示时通常钳制到 `8.00`。

### 4.2 动态并行策略

目标：速度倍率从 1x 增长到约 8x 时，并行从 1 增长到 8。

```js
function getDesiredParallel(machine) {
    const heat = machine.customData.getFloat('heat')
    const speedFactor = 1.0 + (heat / 24000.0) * (8.0222 - 1.0)

    if (speedFactor >= 7.95) return 8
    return Math.max(1, Math.min(8, Math.floor(speedFactor)))
}
```

### 4.3 在配方修改前后临时替换并行 modifier

```js
MBDMachineEvents.onBeforeRecipeModify(TARGET_MACHINE, wrapper => {
    applyDynamicParallel(wrapper.event.machine)
})

MBDMachineEvents.onAfterRecipeModify(TARGET_MACHINE, wrapper => {
    restoreParallel(wrapper.event.machine)
})
```

当前实现通过机器定义中的 recipe modifier 取原始并行配置：

```js
const modifierList = machine.getDefinition()
    .recipeLogicSettings()
    .recipeModifiers()
    .recipeModifiers

for (let i = 0; i < modifierList.size(); i++) {
    const maxParallel = modifierList.get(i).maxParallel
    if (maxParallel !== null) return maxParallel
}
```

然后把临时并行写成：

```js
parallelModifier.setMultiplier(1.0)
parallelModifier.setAddition(parallel - 1)
```

`apply(1) = 1 * multiplier + addition`，所以 `multiplier=1, addition=parallel-1` 得到目标并行。

> 注意：当前脚本用单个 `originalParallel` 全局变量缓存原值。如果以后同一定义存在不同基础并行的变体，或者同一 tick 内多个机器交错修改，应改成按机器实例缓存，例如 `WeakMap`，不要继续依赖一个全局变量。

### 4.4 热值状态更新

`apotheosis_slayer_status.js` 每个机器 tick 执行：

1. 计算结构状态和配方状态。
2. 工作时重置 `slayer_idle_ticks`。
3. 停机后先等待 5 tick，再每 tick 降温 8。
4. 写入同步字段。
5. 热值变化且存在 last recipe 时调用 `logic.markLastRecipeDirty()`，促使配方重新匹配和重新应用 modifier。

```js
if (heatChanged && logic.getLastRecipe() !== null) {
    logic.markLastRecipeDirty()
}
```

这是热值影响速度时非常关键的一步，缺少它就可能出现 UI 已变但实际配方没有重新计算。

### 4.5 防 8x -> 7.99x 闪烁

单纯用浮点公式，满热附近可能长期在 `7.99` 和 `8.00` 间跳动。当前做法：

- 速度超过 `7.95` 时视为达到上限。
- 直接钳制 `heat = MAX_HEAT`。
- 显示速度钳制到 `8.00`。
- 并行直接取 `8`。

这不是隐藏数值问题，而是把“接近满速”定义成一个稳定的离散阈值状态。

### 4.6 不同机器的并行能力

并行上限不是统一常量。若以后要把高级/精英机器做成 4 槽或 9 槽并行，应把“机器定义的基础并行能力”写成显式映射：

```js
const BASE_PARALLEL_BY_MACHINE = {
    'mbd2:advanced_configurable': 4,
    'mbd2:elite_configurable': 9
}
```

然后让动态并行上限来自机器定义，而不是把 `8` 扩散到所有控制器。

## 5. 状态机与文字语义

当前状态优先级：

1. 未成型 -> `未成型`
2. `logic.isSuspend()` -> `已暂停`
3. `logic.isWorking()` -> `运行中`
4. waiting reason 包含 energy/power/FE/能量 -> `电力不足`
5. waiting reason 包含 output/out/输出 -> `输出空间不足`
6. 其他 waiting/输入缺失 -> `空闲`

“等待配方输入”与“空闲”语义重复，因此当前已删除该状态。不要在后续 UI 中重新加入同义分裂。

## 6. Jade 双端集成

### 6.1 服务端注册

文件：`kubejs/startup_scripts/apotheosis_slayer_jade.js`

```js
JadeEvents.onCommonRegistration(event => {
    event.blockDataProvider('aqs:apotheosis_slayer_status', MachineBlockEntity)
        .setCallback((tag, accessor) => {
            const machine = accessor.blockEntity.getMetaMachine()
            tag.putBoolean('formed', machine.customData.getBoolean('slayer_formed'))
            tag.putString('state', machine.customData.getString('slayer_state'))
            tag.putFloat('speed', machine.customData.getFloat('slayer_speed'))
            tag.putInt('parallel', machine.customData.getInt('slayer_parallel'))
            tag.putInt('energyPerTick', machine.customData.getInt('slayer_energy'))
        })
})
```

Jade 数据提供器负责把服务端机器状态写进 tooltip 的 server data。它应该只读权威状态，不在 tooltip 回调里修改机器。

### 6.2 客户端展示

文件：`kubejs/client_scripts/apotheosis_slayer_jade.js`

```js
JadeEvents.onClientRegistration(event => {
    event.block('aqs:apotheosis_slayer_status', MBDMachineBlock)
        .tooltip((tooltip, accessor, config) => {
            const data = accessor.serverData
            tooltip.add(Component.literal('§7结构: ' + (data.getBoolean('formed') ? '§a已成型' : '§c未成型')))
            tooltip.add(Component.literal('§7状态: §f' + data.getString('state')))
        })
})
```

关键点：Jade 的“服务端数据提供”和“客户端显示”必须分文件、分阶段注册。

## 7. 0 耐久输入销毁

### 7.1 事件选择

当前同时对四个机器注册：

```js
MBDMachineEvents.onRecipeWorking(machineId, wrapper => {
    destroyBrokenTargetItems(wrapper.event.machine)
})

MBDMachineEvents.onConsumeInputsAfterWorking(machineId, wrapper => {
    destroyBrokenTargetItems(wrapper.event.machine)
})
```

- `onRecipeWorking`：工作 tick 中，`perTick` 输入处理之后，适合检查 0 耐久。
- `onConsumeInputsAfterWorking`：只在机器实际发送该事件时触发，作为最终扣除后的兜底。
- `onAfterRecipeWorking`：更适合配方完成/中断收尾，不适合作为每个工作 tick 的即时检查。
- `onBeforeRecipeWorking`：适合权限/开关/条件拦截，不适合检测“刚刚被扣到 0 耐久”的输入。

若运行时发现 `onConsumeInputsAfterWorking` 不触发，以 `onRecipeWorking` 做主路径，并检查机器是否实际发送该事件。

### 7.2 槽位获取

```js
const ItemSlotCapabilityTrait = Java.loadClass(
    'com.lowdragmc.mbd2.common.trait.item.ItemSlotCapabilityTrait'
)

function getInputSlotTrait(machine) {
    const direct = machine.getTraitByName(ItemSlotCapabilityTrait, 'item_slot_input')
    if (direct !== null) return direct

    const traits = machine.getRecipeLogicTraits()
    for (let i = 0; i < traits.size(); i++) {
        const trait = traits.get(i)
        if (String(trait.getClass().getName()) !==
            'com.lowdragmc.mbd2.common.trait.item.ItemSlotCapabilityTrait') continue
        if (String(trait.getDefinition().getName()) === 'item_slot_input') return trait
    }
    return null
}
```

多方块部件上的 Trait 不一定挂在控制器自身，所以既查 `getTraitByName`，也查 `getRecipeLogicTraits()`。

### 7.3 安全销毁顺序

先扫描并记录待销毁槽位，再统一清空：

```js
const storage = inputTrait.storage
const brokenSlots = []

for (let i = 0; i < storage.getSlots(); i++) {
    const stack = storage.getStackInSlot(i)
    if (shouldDestroyBrokenItem(stack)) brokenSlots.push(i)
}

for (const slot of brokenSlots) {
    storage.setStackInSlot(slot, ItemStack.EMPTY)
}
```

销毁条件必须同时满足：

- 物品非空。
- 物品可损坏。
- `maxDamage > 0`。
- `damageValue >= maxDamage`。
- 物品 ID 在目标白名单中。

不要只判断 `damage >= maxDamage`，否则某些不可损坏物品或 mod 自定义物品可能出现误判。

## 8. 配方和数据包文件

- KubeJS 配方：`kubejs/server_scripts/recipe/`，使用 `ServerEvents.recipes`。
- 删除配方：`kubejs/server_scripts/remove/`，优先使用稳定 `id`；其次才用 `type`、`input`、`output`。
- 只删除配方不等于从 JEI 隐藏所有来源。客户端还要看 `RecipeViewerEvents.removeEntries(...)`。
- 数据包 JSON：`kubejs/data/<namespace>/...`。例如自定义配方、loot table、data map。
- MBD2 机器 UI/结构/机制的主定义在 `ldlib2/assets/mbd2/...`，KubeJS 只适合做行为补丁和事件扩展。

## 9. 调试清单

| 现象 | 优先检查 |
|---|---|
| `Cannot find function bindDataSource` | 目标组件是不是 `Label`，不是 `TextElement` |
| `Cannot find function bind` | 开关组件类型、绑定的 `IBinding`/`IBinding` 接口是否正确 |
| `redeclaration of var ...` | 全局 `const` 名重复，改成脚本唯一名 |
| UI 文本始终是旧值 | ID 是否错、组件类型是否错、是否使用服务端同步字段、是否重开 UI/重启 |
| 开关只能一个人操作 | 检查 `customData` 权威值、绑定同步方向、是否在远端直接改服务端 recipeLogic |
| 热值变了但速度不变 | 检查 `markLastRecipeDirty()` 是否调用 |
| 8x 附近闪烁 | 使用 7.95 阈值和满热钳制，不要只依赖浮点比较 |
| 0 耐久物品不销毁 | 检查事件是否触发、Trait 是否找到、目标 ID/耐久条件是否满足 |
| Jade 没数据 | 检查 startup 的服务端 provider 和 client 的 tooltip 是否都注册 |
| 物品栏图标不是方块 | 物品模型放 `models/item`，不是 `textures/item` |

### 9.1 日志

当前日志位置：

```text
logs/kubejs/startup.log
logs/kubejs/server.log
logs/kubejs/client.log
```

当前 `server.log` 已显示：

```text
Loaded 65/65 KubeJS server scripts ... with 0 errors and 0 warnings
```

如果脚本加载时报错，先修日志中的第一处异常，不要继续猜测后续行为。

### 9.2 JS 语法检查

对普通 KubeJS JS 文件可先做：

```powershell
node --check 'kubejs/server_scripts/event/ui.js'
```

注意：`node --check` 只能检查 JavaScript 语法，不能验证 Rhino 映射、Java 类签名或 MBD2 事件语义。

## 10. 可复用规则摘要

1. 动态文本用 `Label + bindDataSource`，静态文本才用 `TextElement`。
2. 跨端状态先从服务端写入 `machine.customData`，再看 Jade/UI。
3. 开关默认值放在 getter，持久化放 `customData`，最终拦截放 `onBeforeRecipeWorking`。
4. 开关不要用 `onTick` 轮询。
5. 热值/并行临时修改放在 `onBeforeRecipeModify`/`onAfterRecipeModify`。
6. 热值变化后调用 `markLastRecipeDirty()`，否则配方可能不重算。
7. 防闪烁优先使用明确阈值和离散上限，不让浮点决定最终状态。
8. Jade 服务端 provider 和客户端 tooltip 分离。
9. 槽位扫描先收集再修改，避免边遍历边改存储。
10. 全局变量必须用脚本唯一名；Rhino 对全局声明冲突非常敏感。