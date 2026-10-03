ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('mbd2:compact_fissile_fuel'), 
        [                                               
            'mekanism_extras:absolute_enriching_factory',
            'mekanism_extras:absolute_oxidizing_factory',
            'mekanism_extras:absolute_dissolving_factory',
            'mekanism_extras:absolute_centrifuging_factory',
            'ae2lt:overloaded_interface',
            'just_sink:sink',
            'mekmm:large_chemical_infuser',
            'mekmm:large_rotary_condensentrator',
            'mekmm:large_electrolytic_separator'
        ]
)})