// kubejs/server_scripts/event/switch.js

const POWER_SWITCH_MACHINES = [
    'mbd2:compact_god_slayer',
    'mbd2:apotheosis_slayer_factory',
    'mbd2:rainbow_generator',
    'mbd2:frame_sandblaster',
    'mbd2:ultimate_configurable',
    'mbd2:dimensional_stabilimentum',
    'mbd2:advanced_seed_aggregator',
    'mbd2:seed_aggregator'
]

function registerPowerSwitch(machineId) {
    const switchId = 'power_switch'
    const dataKey = 'power_switch'

    function isPowerSwitchOn(machine) {
        // 没有保存过开关值时默认为开启；手动关闭后才会保存 false。
        if (!machine.customData.contains(dataKey)) return true
        return machine.customData.getBoolean(dataKey)
    }

    MBDMachineEvents.onUI(machineId, wrapper => {
        const { machine, ui } = wrapper.event
        if (!machine || !ui) return

        const powerSwitch = ui.selectId(switchId).findFirst().orElse(null)
        if (powerSwitch === null) {
            console.warn(`Missing UI element #${switchId} on ${machineId}`)
            return
        }

        // 使用 DataBindingBuilder 绑定开关状态，实现双向同步
        const binding = DataBindingBuilder.bool(
            // getter: 从 machine.customData 读取当前值
            () => isPowerSwitchOn(machine),
            // setter: 值变化时写入 customData 并更新配方逻辑
            (value) => {
                const updated = machine.customData.copy()
                updated.putBoolean(dataKey, value)
                machine.setCustomData(updated)
                // 服务端更新配方逻辑
                machine.recipeLogic.setWorkingEnabled(value)
            }
        ).build()

        // 将绑定应用到开关上
        powerSwitch.bind(binding)
    })

    // 配方工作前判定（保持不变）
    MBDMachineEvents.onBeforeRecipeWorking(machineId, wrapper => {
        const { machine } = wrapper.event
        if (!isPowerSwitchOn(machine)) {
            wrapper.cancel()
        }
    })
}

POWER_SWITCH_MACHINES.forEach(machineId => registerPowerSwitch(machineId))