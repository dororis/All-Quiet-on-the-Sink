ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "jdte:infusion",
            "id": "jdte:blazegold_ingot_infusion",
            "input": {
            "id": "minecraft:gold_ingot",
            "count": 1
        },
            "fluid": {
            "id": "justdirethings:refined_t2_fluid_source",
            "amount": 1000
        },
            "output": {
            "id": "justdirethings:blazegold_ingot",
            "count": 1
        },
        "energy": 5000
    })
})