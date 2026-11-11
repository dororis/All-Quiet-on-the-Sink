ServerEvents.recipes(event => {
    event.custom({           
        "type": "advanced_ae:reaction",
        "input_energy": 20000,
        "input_fluid": {
        "amount": 1000,
        "ingredient": {
        "fluid": "minecraft:water"
        }
        },
        "input_items": [
        {
        "amount": 1,
        "ingredient": {
        "item": "rftoolsbase:dimensionalshard"
        }
        }
        ],
        "output": {
        "#": 1000,
        "#t": "ae2:f",
        "id": "justdirethings:polymorphic_fluid_source"
        }
    })
})