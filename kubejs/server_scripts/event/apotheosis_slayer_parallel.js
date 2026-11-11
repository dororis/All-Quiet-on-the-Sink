// 神化屠宰厂：速度倍率 1x -> 8x 时，动态并行 1 -> 8。
// 速度公式与 heat_buildup_copy 蓝图一致：
// speed = 1 + heat / maxHeat * (bonusAtMaxHeat - 1)
const TARGET_MACHINE = 'mbd2:apotheosis_slayer_factory'
const MAX_HEAT = 24000.0
const BONUS_AT_MAX_HEAT = 8.0222
const MAX_PARALLEL = 8

let originalParallel = null

function getParallelModifier(machine) {
    const modifierList = machine.getDefinition()
        .recipeLogicSettings()
        .recipeModifiers()
        .recipeModifiers

    for (let i = 0; i < modifierList.size(); i++) {
        const maxParallel = modifierList.get(i).maxParallel
        if (maxParallel !== null) return maxParallel
    }
    return null
}

function getDesiredParallel(machine) {
    const heat = machine.customData.getFloat('heat')
    const speedFactor = 1.0 + (heat / MAX_HEAT) * (BONUS_AT_MAX_HEAT - 1.0)
    if (speedFactor >= 7.95) return MAX_PARALLEL
    return Math.max(1, Math.min(MAX_PARALLEL, Math.floor(speedFactor)))
}

function applyDynamicParallel(machine) {
    const parallelModifier = getParallelModifier(machine)
    if (parallelModifier === null) return

    if (originalParallel === null) {
        originalParallel = {
            addition: parallelModifier.getAddition(),
            multiplier: parallelModifier.getMultiplier()
        }
    }

    const parallel = getDesiredParallel(machine)
    // ContentModifier.apply(1) = 1 * multiplier + addition
    parallelModifier.setMultiplier(1.0)
    parallelModifier.setAddition(parallel - 1)
}

function restoreParallel(machine) {
    if (originalParallel === null) return

    const parallelModifier = getParallelModifier(machine)
    if (parallelModifier === null) return

    parallelModifier.setAddition(originalParallel.addition)
    parallelModifier.setMultiplier(originalParallel.multiplier)
}

MBDMachineEvents.onBeforeRecipeModify(TARGET_MACHINE, wrapper => {
    applyDynamicParallel(wrapper.event.machine)
})

MBDMachineEvents.onAfterRecipeModify(TARGET_MACHINE, wrapper => {
    restoreParallel(wrapper.event.machine)
})