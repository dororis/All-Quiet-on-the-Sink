ServerEvents.recipes(event => {
    event.shaped(
        Item.of('jdte:ultimate_time_wand'), 
        [                                               
            ' AB',
            ' CA',
            'C  '
        ],
        {
            C: 'justdirethings:ferricore_ingot',  
            B: 'jdte:time_fluid_catalyst',          
            A: 'justdirethings:blazegold_ingot'                
        }
    )
})