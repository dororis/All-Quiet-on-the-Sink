ServerEvents.recipes(event => {
    event.shaped(
        Item.of('mbd2:compact_thermal'), 
        [                                               
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'mekanism:resistive_heater',  
            B: 'cataclysm:ignitium_ingot',
            C:'mekanism:thermal_evaporation_controller'                       
        }
    )
})