// kubejs/startup_scripts/infinities_bee_upgrade_cell.js

StartupEvents.registry('item', event => {
    // 6 种升级物品
    const upgrades = [
        'productivelib:upgrade_productivity_4',
        'productivelib:upgrade_time_2',
        'productivebeesgenesis:byproduct_destruction_upgrade',
        'productivebeesgenesis:essence_conversion_upgrade',
        'productivelib:upgrade_stability',
        'productivebeesgenesis:raw_ore_smelting_upgrade'
    ]

    event.create('infinities_bee_upgrade_cell', 'meinfinitycell:infinities_cell')
        .setName(Text.literal('蜜蜂升级'))
        .setKeys(KeyList.create().adds(keys => {
            upgrades.forEach(id => {
                keys.add(AEKeyHelper.item(id))
            })
        }))
        .texture('extendedae:item/infinity_cell')
})