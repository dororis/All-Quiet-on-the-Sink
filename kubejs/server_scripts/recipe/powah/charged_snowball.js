ServerEvents.recipes(event => {
    event.shaped(
        Item.of('8x powah:charged_snowball'), 
        [                                               
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ae2:white_paint_ball',  
            B: 'minecraft:redstone',                         
        }
    )
    event.shaped(
        Item.of('8x minecraft:wind_charge'), 
        [                                               
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ae2:white_paint_ball',  
            B: 'cataclysm:storm_eye',                         
        }
    )
    event.shaped(
        Item.of('8x minecraft:egg'), 
        [                                               
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ae2:white_paint_ball',  
            B: 'hostilenetworks:overworld_prediction',                         
        }
    )
})