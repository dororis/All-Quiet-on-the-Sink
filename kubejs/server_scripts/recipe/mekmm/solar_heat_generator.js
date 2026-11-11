ServerEvents.recipes(event => {
    event.shaped(
        Item.of('mekmm:solar_heat_generator'), 
        [                                               
            'AAA',
            'BCB',
            'ADA'
        ],
        {
            A: 'alltheores:steel_block',  
            B: 'mekmm:ultimate_max_chemical_tank',
            C:'mekanism:robit',
            D:'mekanism:ultimate_fluid_tank'                       
        }
    )
})