ServerEvents.recipes(event => {
    event.shaped(
        Item.of('jdte:basic_time_accelerator'), 
        [                                               
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'justdirethings:time_crystal',  
            B: 'extendedae_plus:entity_speed_card[custom_data={"EAS:mult":4b}]' ,
            C:'jdte:fluid_upgrade'                      
        }
    )
})
ServerEvents.recipes(event => {
    event.shaped(
        Item.of('jdte:advanced_time_accelerator'), 
        [                                               
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'justdirethings:time_crystal',  
            B: 'extendedae_plus:entity_speed_card[custom_data={"EAS:mult":8b}]' ,
            C:'jdte:overclock_upgrade',
            D:'jdte:basic_time_accelerator'                      
        }
    )
})
ServerEvents.recipes(event => {
    event.shaped(
        Item.of('jdte:extended_time_accelerator'), 
        [                                               
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'justdirethings:time_crystal',  
            B: 'extendedae_plus:entity_speed_card[custom_data={"EAS:mult":16b}]' ,
            C:'jdte:advanced_time_accelerator'                      
        }
    )
})