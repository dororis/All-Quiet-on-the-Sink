ServerEvents.recipes(event => {
    event.custom({           
        "type": "advanced_ae:reaction",
        "input_energy": 20000,
        "input_fluid": {
        "amount": 1000,
        "ingredient": {
        "fluid": "justdirethings:time_fluid_source"
        }
        },
        "input_items": [
        {
        "amount": 4,
        "ingredient": {
        "item": "minecraft:echo_shard"
        }
        }
        ],
        "output": {
        "#": 4,
        "#t": "ae2:i",
        "id": "justdirethings:time_crystal"
        }
    })
})