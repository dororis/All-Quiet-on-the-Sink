// kubejs/startup_scripts/infinities_factory_cell.js

StartupEvents.registry('item', event => {
    const factories = [
        'productivebeesgenesis:infinite_extra_mek_centrifuge_factory',
        'productivebeesgenesis:infinite_extra_mek_apiary_factory',
        'mekenergistics:me_infinite_smelting_factory',
        'mekenergistics:me_infinite_crushing_factory',
        'mekenergistics:me_infinite_compressing_factory',
        'mekenergistics:me_infinite_combining_factory',
        'mekenergistics:me_infinite_purifying_factory',
        'mekenergistics:me_infinite_injecting_factory',
        'mekenergistics:me_infinite_replicating_factory',
        'mekenergistics:me_infinite_pressing_factory',
        'mekenergistics:me_infinite_rolling_mill_factory',
        'mekenergistics:me_infinite_lathing_factory',
        'mekenergistics:me_infinite_stamping_factory',
        'mekenergistics:me_infinite_planting_factory',
        'mekenergistics:me_infinite_sawing_factory',
        'mekenergistics:me_infinite_infusing_factory',
        'mekenergistics:me_infinite_oxidizing_factory',
        'mekenergistics:me_infinite_dissolving_factory',
        'mekenergistics:me_infinite_washing_factory',
        'mekenergistics:me_infinite_pressurised_reacting_factory',
        'mekenergistics:me_infinite_centrifuging_factory',
        'mekenergistics:me_infinite_liquifying_factory',
        'mekenergistics:me_infinite_pigment_extracting_factory',
        'mekenergistics:me_infinite_painting_factory'
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