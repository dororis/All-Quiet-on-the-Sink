ServerEvents.recipes(event => {
    event.shaped(
        Item.of('8x anvilcraft:cinerite'), 
        [                                               
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:cobblestone',  
            B: 'hostilenetworks:nether_prediction',                         
        }
    )
})