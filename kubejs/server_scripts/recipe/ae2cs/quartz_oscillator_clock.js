ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('ae2cs:quartz_oscillator_clock'), 
        [                                               
            'rftoolsutility:timer',
            'minecraft:quartz_block',
        ]
    )
})