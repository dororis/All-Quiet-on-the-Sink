ServerEvents.recipes(event => {
    event.custom({           
        "type": "advanced_ae:reaction",
        "input_energy": 20000,
        "input_fluid": {
        "amount": 20,
        "ingredient": {
        "fluid": "justdirethings:refined_t2_fluid_source"
        }
        },
        "input_items": [
        {
        "amount": 1,
        "ingredient": {
        "item": "ae2cs:purified_meteor_crystal"
        }
        }
        ],
        "output": {
        "#": 1000,
        "#t": "ae2:f",
        "id": "minecraft:lava"
        }
    })
})