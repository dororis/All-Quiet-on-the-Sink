ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:sawing",
        "input": { "count": 1, "item": "apotheosis:timeworn_fabric" },
        "main_output": { "count": 1, "id": "anvilcraft:wood_fiber" },
        "secondary_chance": 0.5,
        "secondary_output": { "count": 1, "id": "anvilcraft:resin" }
    })
})