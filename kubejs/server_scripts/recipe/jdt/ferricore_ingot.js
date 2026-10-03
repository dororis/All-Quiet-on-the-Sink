ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "jdte:infusion",
            "id": "jdte:ferricore_ingot_infusion",
            "input": {
            "id": "minecraft:iron_ingot",
            "count": 1
        },
            "fluid": {
            "id": "justdirethings:polymorphic_fluid_source",
            "amount": 1000
        },
            "output": {
            "id": "justdirethings:ferricore_ingot",
            "count": 1
        },
        "energy": 5000
    })
})