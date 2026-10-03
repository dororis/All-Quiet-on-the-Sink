ServerEvents.recipes(event => {
    event.custom({           
        "type": "advanced_ae:reaction",
        "input_energy": 20000,
        "input_fluid": {
        "amount": 1000,
        "ingredient": {
        "fluid": "alltheores:molten_silver"
        }
        },
        "input_items": [
        {
        "amount": 1,
        "ingredient": {
        "item": "irons_spellbooks:upgrade_orb"
        }
        },
        {
        "amount": 8,
        "ingredient": {
        "item": "irons_spellbooks:divine_pearl"
        }
        }
        ],
        "output": {
        "#": 8,
        "#t": "ae2:i",
        "id": "irons_spellbooks:holy_upgrade_orb"
        }
    })
})