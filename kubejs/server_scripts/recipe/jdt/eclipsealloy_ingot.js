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
})