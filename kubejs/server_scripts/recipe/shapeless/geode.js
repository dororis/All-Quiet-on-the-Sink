ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('anvilcraft:geode'), 
        [                                               
            'hostilenetworks:overworld_prediction',
            'hostilenetworks:nether_prediction',
            'hostilenetworks:end_prediction'
        ]
    )
})