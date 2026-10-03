ServerEvents.recipes(event => {
    event.shaped(
        Item.of('neoecoae:integrated_working_station'), 
        [                                               
            'ACA',
            'DBE',
            'AFA'
        ],
        {
            F: 'ae2lt:overload_processing_factory',  
            A: 'neoecoae:aluminum_alloy_casing',
            B:'advanced_ae:quantum_core',
            C:'mekanism_extras:cosmic_pressing_factory',
            D:'extendedae_plus:circuit_cutter_plus',
            E:'extendedae_plus:crystal_assembler_plus'                         
        }
    )
})