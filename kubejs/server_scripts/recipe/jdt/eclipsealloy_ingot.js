ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "jdte:infusion",
            "id": "jdte:eclipsealloy_ingot_infusion",
            "input": {
            "id": "minecraft:netherite_ingot",
            "count": 1
        },
            "fluid": {
            "id": "justdirethings:refined_t4_fluid_source",
            "amount": 1000
        },
            "output": {
            "id": "justdirethings:eclipsealloy_ingot",
            "count": 1
        },
        "energy": 5000
    })
    event.custom(
        {
            "type": "jdte:infusion",
            "id": "jdte:eclipsealloy_ingot_infusion",
            "input": {
            "id": "minecraft:netherite_block",
            "count": 1
        },
            "fluid": {
            "id": "justdirethings:refined_t4_fluid_source",
            "amount": 9000
        },
            "output": {
            "id": "justdirethings:eclipsealloy_block",
            "count": 1
        },
        "energy": 45000
    })
    event.shapeless(
        Item.of('9x justdirethings:eclipsealloy_ingot'), 
        [                                               
            'justdirethings:eclipsealloy_block'
        ]
    )
})