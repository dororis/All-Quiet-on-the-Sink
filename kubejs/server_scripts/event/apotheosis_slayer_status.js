const AQS_SLAYER_STATUS_MACHINE = 'mbd2:apotheosis_slayer_factory'
const AQS_SLAYER_STATUS_MAX_HEAT = 24000.0
const AQS_SLAYER_STATUS_COOL_PER_TICK = 8.0
const AQS_SLAYER_STATUS_IDLE_DELAY = 5
const AQS_SLAYER_STATUS_BONUS = 8.0222
const AQS_SLAYER_STATUS_BASE_ENERGY = 4096.0

function getAqsSlayerState(machine, formed) {
    if (!formed) return '未成型'

    const logic = machine.recipeLogic
    if (logic.isSuspend()) return '已暂停'
    if (logic.isWorking()) return '运行中'

    if (logic.isWaiting()) {
        const reason = logic.getWaitingReason()
        const text = reason === null ? '' : reason.getString()
        const lower = text.toLowerCase()

        if (lower.indexOf('energy') !== -1 || lower.indexOf('power') !== -1 || lower.indexOf('fe') !== -1 || text.indexOf('能量') !== -1) {
            return '电力不足'
        }
        if (lower.indexOf('output') !== -1 || lower.indexOf('out') !== -1 || text.indexOf('输出') !== -1) {
            return '输出空间不足'
        }
    }

    // 输入不足统一显示为空闲。
    return '空闲'
}

// heat_buildup_copy 中 coolPerTick 已设为 0；空闲冷却在这里延迟触发。
function updateAqsSlayerStatus(machine) {
    const logic = machine.recipeLogic
    const formed = machine.isFormedValid ? machine.isFormedValid() : machine.isFormed()
    const state = getAqsSlayerState(machine, formed)

    const oldHeat = machine.customData.getFloat('heat')
    const oldIdleTicks = machine.customData.contains('slayer_idle_ticks') ? machine.customData.getInt('slayer_idle_ticks') : 0

    let heat = oldHeat
    let idleTicks = oldIdleTicks
    const working = logic.isWorking()

    if (working) {
        idleTicks = 0
        const currentSpeed = 1.0 + (heat / AQS_SLAYER_STATUS_MAX_HEAT) * (AQS_SLAYER_STATUS_BONUS - 1.0)
        if (currentSpeed >= 7.95) {
            heat = AQS_SLAYER_STATUS_MAX_HEAT
        }
    } else {
        idleTicks = Math.min(AQS_SLAYER_STATUS_IDLE_DELAY, idleTicks + 1)
        if (idleTicks >= AQS_SLAYER_STATUS_IDLE_DELAY) {
            heat = Math.max(0.0, heat - AQS_SLAYER_STATUS_COOL_PER_TICK)
        }
    }

    const rawSpeed = 1.0 + (heat / AQS_SLAYER_STATUS_MAX_HEAT) * (AQS_SLAYER_STATUS_BONUS - 1.0)
    const speed = Math.min(8.0, rawSpeed)
    const parallel = Math.max(1, Math.min(8, Math.floor(speed)))
    const energyPerTick = Math.floor(AQS_SLAYER_STATUS_BASE_ENERGY * parallel)

    const oldState = machine.customData.contains('slayer_state') ? machine.customData.getString('slayer_state') : ''
    const oldFormed = machine.customData.contains('slayer_formed') && machine.customData.getBoolean('slayer_formed')
    const oldParallel = machine.customData.contains('slayer_parallel') ? machine.customData.getInt('slayer_parallel') : -1
    const oldEnergy = machine.customData.contains('slayer_energy') ? machine.customData.getInt('slayer_energy') : -1
    const heatChanged = Math.abs(heat - oldHeat) > 0.0001

    if (oldState === state && oldFormed === formed && oldParallel === parallel && oldEnergy === energyPerTick && oldIdleTicks === idleTicks && !heatChanged) return

    const updated = machine.customData.copy()
    if (heatChanged) updated.putFloat('heat', heat)
    updated.putInt('slayer_idle_ticks', idleTicks)
    updated.putBoolean('slayer_formed', formed)
    updated.putString('slayer_state', state)
    updated.putFloat('slayer_speed', speed)
    updated.putInt('slayer_parallel', parallel)
    updated.putInt('slayer_energy', energyPerTick)
    machine.setCustomData(updated)

    if (heatChanged && logic.getLastRecipe() !== null) {
        logic.markLastRecipeDirty()
    }
}

MBDMachineEvents.onTick(AQS_SLAYER_STATUS_MACHINE, wrapper => {
    const machine = wrapper.event.machine
    if (!machine) return
    updateAqsSlayerStatus(machine)
})