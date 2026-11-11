ServerEvents.recipes(event => {
    event.custom({           
        "type": "advanced_ae:reaction",
        "input_energy": 20000,
        "input_fluid": {
        "amount": 1000,
        "ingredient": {
        "fluid": "anvilcraft:melt_gem"
        }
        },
        "input_items": [
        {
        "amount": 1,
        "ingredient": {
        "item": "irons_spellbooks:holy_upgrade_orb"
        }
        }
        ],
        "output": {
        "#": 64,
        "#t": "ae2:i",
        "id": "apotheosis:godforged_pearl"
        }
    })
})