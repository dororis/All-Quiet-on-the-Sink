ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('4x minecraft:glowstone_dust'), 
        [                                               
            'minecraft:glowstone'
        ]
    )
    event.shapeless(
        Item.of('4x minecraft:quartz'), 
        [                                               
            'minecraft:quartz_block'
        ]
    )
})