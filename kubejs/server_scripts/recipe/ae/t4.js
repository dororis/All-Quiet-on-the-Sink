ServerEvents.recipes(event => {
    event.custom({           
        "type": "advanced_ae:reaction",
        "input_energy": 20000,
        "input_fluid": {
        "amount": 1000,
        "ingredient": {
        "fluid": "justdirethings:refined_t3_fluid_source"
        }
        },
        "input_items": [
        {
        "amount": 64,
        "ingredient": {
        "item": "irons_spellbooks:cooldown_upgrade_orb"
        }
        }
        ],
        "output": {
        "#": 1000,
        "#t": "ae2:f",
        "id": "justdirethings:refined_t4_fluid_source"
        }
    })
})
