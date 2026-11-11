// kubejs/startup_scripts/infinities_factory_cell.js

StartupEvents.registry('item', event => {
    const factories = [
        'productivebeesgenesis:infinite_extra_mek_centrifuge_factory',
        'productivebeesgenesis:infinite_extra_mek_apiary_factory',
        'mekanism_extras:infinite_smelting_factory',
        'mekanism_extras:infinite_crushing_factory',
        'mekanism_extras:infinite_compressing_factory',
        'mekanism_extras:infinite_combining_factory',
        'mekanism_extras:infinite_purifying_factory',
        'mekanism_extras:infinite_injecting_factory',
        'mekanism_extras:infinite_replicating_factory',
        'mekanism_extras:infinite_pressing_factory',
        'mekanism_extras:infinite_rolling_mill_factory',
        'mekanism_extras:infinite_lathing_factory',
        'mekanism_extras:infinite_stamping_factory',
        'mekanism_extras:infinite_planting_factory',
        'mekanism_extras:infinite_sawing_factory',
        'mekanism_extras:infinite_infusing_factory',
        'mekanism_extras:infinite_oxidizing_factory',
        'mekanism_extras:infinite_dissolving_factory',
        'mekanism_extras:infinite_washing_factory',
        'mekanism_extras:infinite_pressurised_reacting_factory',
        'mekanism_extras:infinite_centrifuging_factory',
        'mekanism_extras:infinite_liquifying_factory',
        'mekanism_extras:infinite_pigment_extracting_factory',
        'mekanism_extras:infinite_painting_factory',
        'mekanism_extras:infinite_enriching_factory'
    ]

    event.create('infinities_factory_cell', 'meinfinitycell:infinities_cell')
        .setName(Text.literal('悖论工厂'))
        .setKeys(KeyList.create().adds(keys => {
            factories.forEach(id => {
                keys.add(AEKeyHelper.item(id))
            })
        }))
        .texture('extendedae:item/infinity_cell')

})