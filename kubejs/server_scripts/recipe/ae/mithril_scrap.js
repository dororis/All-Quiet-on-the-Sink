ServerEvents.recipes(event => {
    event.custom({           
        "type": "advanced_ae:reaction",
        "input_energy": 20000,
        "input_fluid": {
        "amount": 4000,
        "ingredient": {
        "fluid": "alltheores:molten_silver"
        }
        },
        "input_items": [
        {
        "amount": 64,
        "ingredient": {
        "item": "irons_spellbooks:arcane_ingot"
        }
        }
        ],
        "output": {
        "#": 16,
        "#t": "ae2:i",
        "id": "irons_spellbooks:mithril_scrap"
        }
    })
})