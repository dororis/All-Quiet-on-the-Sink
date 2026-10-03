ServerEvents.recipes(event => {
    event.remove({ id: 'ironfurnaces:rainbow_core' })
    event.shaped(
        Item.of('ironfurnaces:rainbow_core'), 
        [                                               
            ' A ',
            'BRC',
            ' D '
        ],
        {
            A: 'minecraft:red_dye',  
            B: 'minecraft:blue_dye',          
            C: 'minecraft:green_dye',
            D: 'minecraft:yellow_dye',
            R: 'minecraft:stone_brick_wall'
        }
    )
})