ServerEvents.recipes(event => {
    event.custom({           
        "type": "advanced_ae:reaction",
        "input_energy": 20000,
        "input_fluid": {
        "amount": 1000,
        "ingredient": {
        "fluid": "justdirethings:refined_t2_fluid_source"
        }
        },
        "input_items": [
        {
        "amount": 64,
        "ingredient": {
        "item": "ae2:sky_stone_block"
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