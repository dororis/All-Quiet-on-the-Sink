ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "jdte:infusion",
            "id": "jdte:celestigem_infusion",
            "input": {
            "id": "minecraft:diamond",
            "count": 1
        },
            "fluid": {
            "id": "justdirethings:refined_t3_fluid_source",
            "amount": 1000
        },
            "output": {
            "id": "justdirethings:celestigem",
            "count": 1
        },
        "energy": 5000
    })
})