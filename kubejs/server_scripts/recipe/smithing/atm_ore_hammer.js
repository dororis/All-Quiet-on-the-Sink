ServerEvents.recipes(event => {
    event.smithing(
        'kubejs:atm_ore_hammer',                          // 输出物品 (Result)
        'allthemodium:allthemodium_upgrade_smithing_template', // 锻造模板 (Template)
        'alltheores:platinum_ore_hammer',                     // 底座 (Base)
        'allthemodium:allthemodium_ingot'                     // 材料 (Addition)
    )
    event.smithing(
        'allthemodium:allthemodium_pickaxe',
        'allthemodium:allthemodium_upgrade_smithing_template',
        'mekanismtools:refined_obsidian_pickaxe',
        'allthemodium:allthemodium_ingot'
    )
    event.smithing(
        'kubejs:atm_coal',
        'allthemodium:allthemodium_upgrade_smithing_template',
        'minecraft:coal',
        'allthemodium:allthemodium_ingot'
    )
})