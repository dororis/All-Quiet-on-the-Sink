ServerEvents.recipes(event => {
    event.shaped(
        Item.of('8x anvilcraft:end_dust'), 
        [                                               
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:end_stone',  
            B: 'hostilenetworks:end_prediction',                         
        }
    )
})