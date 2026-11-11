ServerEvents.recipes(event => {
    event.smithing(
        'cataclysm:ignitium_ingot',                          // 输出物品 (Result)
        'cataclysm:ignitium_upgrade_smithing_template', // 锻造模板 (Template)
        'allthemodium:vibranium_allthemodium_alloy_ingot',                     // 底座 (Base)
        'allthemodium:unobtainium_allthemodium_alloy_ingot'                     // 材料 (Addition)
    )
    event.smithing(
        'cataclysm:cursium_ingot',                          // 输出物品 (Result)
        'cataclysm:cursium_upgrade_smithing_template', // 锻造模板 (Template)
        'allthemodium:vibranium_allthemodium_alloy_ingot',                     // 底座 (Base)
        'allthemodium:unobtainium_vibranium_alloy_ingot'                     // 材料 (Addition)
    )
    event.smithing(
        'cataclysm:witherite_ingot',                          // 输出物品 (Result)
        'minecraft:netherite_upgrade_smithing_template', // 锻造模板 (Template)
        'allthemodium:unobtainium_allthemodium_alloy_ingot',                     // 底座 (Base)
        'allthemodium:unobtainium_vibranium_alloy_ingot'                     // 材料 (Addition)
    )
})