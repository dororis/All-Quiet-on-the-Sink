const AqsSlayerMachineBlockEntity = Java.loadClass('com.lowdragmc.mbd2.common.blockentity.MachineBlockEntity')
const AqsSlayerBuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')

const AQS_SLAYER_BLOCK_ID = 'mbd2:apotheosis_slayer_factory'
const AQS_SLAYER_JADE_ID = 'aqs:apotheosis_slayer_status'
const AQS_SLAYER_MAX_HEAT = 24000.0
const AQS_SLAYER_BONUS_AT_MAX_HEAT = 8.0222
const AQS_SLAYER_BASE_ENERGY_PER_TICK = 4096.0

function getAqsSlayerStatus(machine) {
    const logic = machine.recipeLogic
    const formed = machine.isFormedValid ? machine.isFormedValid() : machine.isFormed()

    if (!formed) return '未成型'
    if (logic.isSuspend()) return '已暂停'
    if (logic.isWorking()) return '运行中'
    if (logic.isWaiting()) {
        const reason = logic.getWaitingReason()
        const reasonText = reason === null ? '' : reason.getString()
        const lower = reasonText.toLowerCase()

        if (lower.indexOf('energy') !== -1 || lower.indexOf('power') !== -1 || lower.indexOf('fe') !== -1 || reasonText.indexOf('能量') !== -1) {
            return '电力不足'
        }
        if (lower.indexOf('output') !== -1 || lower.indexOf('out') !== -1 || reasonText.indexOf('输出') !== -1) {
            return '输出空间不足'
        }
        return '空闲'
    }
    return '空闲'
}

JadeEvents.onCommonRegistration(event => {
    event.blockDataProvider(AQS_SLAYER_JADE_ID, AqsSlayerMachineBlockEntity)
        .setCallback((tag, accessor) => {
            const blockId = String(AqsSlayerBuiltInRegistries.BLOCK.getKey(accessor.block))
            if (blockId !== AQS_SLAYER_BLOCK_ID) return

            const machine = accessor.blockEntity.getMetaMachine()
            if (machine === null) return

            const data = machine.customData
            const computedFormed = machine.isFormedValid ? machine.isFormedValid() : machine.isFormed()
            const computedSpeed = 1.0 + (data.getFloat('heat') / AQS_SLAYER_MAX_HEAT) * (AQS_SLAYER_BONUS_AT_MAX_HEAT - 1.0)
            const computedParallel = Math.max(1, Math.min(8, Math.floor(Math.min(8.0, computedSpeed))))

            const formed = data.contains('slayer_formed') ? data.getBoolean('slayer_formed') : computedFormed
            const state = data.contains('slayer_state') ? data.getString('slayer_state') : getAqsSlayerStatus(machine)
            const speed = data.contains('slayer_speed') ? data.getFloat('slayer_speed') : Math.min(8.0, computedSpeed)
            const parallel = data.contains('slayer_parallel') ? data.getInt('slayer_parallel') : computedParallel
            const energyPerTick = data.contains('slayer_energy') ? data.getInt('slayer_energy') : Math.floor(AQS_SLAYER_BASE_ENERGY_PER_TICK * parallel)

            tag.putBoolean('formed', formed)
            tag.putString('state', state)
            tag.putFloat('speed', speed)
            tag.putInt('parallel', parallel)
            tag.putInt('energyPerTick', energyPerTick)
        })
})