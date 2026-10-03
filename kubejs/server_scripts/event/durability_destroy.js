const ItemStack = Java.loadClass('net.minecraft.world.item.ItemStack')
const ItemSlotCapabilityTrait = Java.loadClass('com.lowdragmc.mbd2.common.trait.item.ItemSlotCapabilityTrait')

// MBDMachineEvents 只能按机器 ID 注册。
const TARGET_MACHINES = [
    'mbd2:basic_configurable',
    'mbd2:advanced_configurable',
    'mbd2:elite_configurable',
    'mbd2:ultimate_configurable'
]
const INPUT_SLOT_NAME = 'item_slot_input'
const TARGET_ITEM_IDS = [
    'kubejs:overworld_nether_core',
    'kubejs:sun_climb_core',
    'kubejs:thunder_peak_core'
]

function getInputSlotTrait(machine) {
    const directTrait = machine.getTraitByName(ItemSlotCapabilityTrait, INPUT_SLOT_NAME)
    if (directTrait !== null) return directTrait

    // 多方块部件上的 Trait 不在控制器自身，继续从配方可见 Trait 中查找。
    const recipeTraits = machine.getRecipeLogicTraits()
    for (let traitIndex = 0; traitIndex < recipeTraits.size(); traitIndex++) {
        const recipeTrait = recipeTraits.get(traitIndex)
        const className = String(recipeTrait.getClass().getName())
        if (className !== 'com.lowdragmc.mbd2.common.trait.item.ItemSlotCapabilityTrait') continue
        if (String(recipeTrait.getDefinition().getName()) === INPUT_SLOT_NAME) return recipeTrait
    }
    return null
}

function shouldDestroyBrokenItem(itemStack) {
    if (itemStack.isEmpty() || !itemStack.isDamageableItem()) return false

    const maxDamage = itemStack.getMaxDamage()
    if (maxDamage <= 0 || itemStack.getDamageValue() < maxDamage) return false

    return TARGET_ITEM_IDS.indexOf(String(itemStack.id)) !== -1
}

function destroyBrokenTargetItems(machine) {
    const inputTrait = getInputSlotTrait(machine)
    if (inputTrait === null) return

    const storage = inputTrait.storage
    const slotCount = storage.getSlots()
    const brokenSlots = []

    for (let slotIndex = 0; slotIndex < slotCount; slotIndex++) {
        const slotStack = storage.getStackInSlot(slotIndex)
        if (shouldDestroyBrokenItem(slotStack)) {
            brokenSlots.push(slotIndex)
        }
    }

    for (let brokenIndex = 0; brokenIndex < brokenSlots.length; brokenIndex++) {
        storage.setStackInSlot(brokenSlots[brokenIndex], ItemStack.EMPTY)
    }
}

TARGET_MACHINES.forEach(machineId => {
    // 每次工作 tick 扣完 perTick 输入后触发，适合检查 0 耐久。
    MBDMachineEvents.onRecipeWorking(machineId, wrapper => {
        destroyBrokenTargetItems(wrapper.event.machine)
    })

    // consumeInputsAfterWorking=true 时，最终一次输入扣除后触发。
    MBDMachineEvents.onConsumeInputsAfterWorking(machineId, wrapper => {
        destroyBrokenTargetItems(wrapper.event.machine)
    })
})