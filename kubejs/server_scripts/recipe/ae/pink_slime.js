ServerEvents.recipes(event => {
    event.custom({           
        "type": "advanced_ae:reaction",
        "input_energy": 20000,
        "input_fluid": {
        "amount": 3000,
        "ingredient": {
        "fluid": "minecraft:lava"
        }
        },
        "input_items": [
        {
        "amount": 3,
        "ingredient": {
        "item": "irons_spellbooks:evocation_upgrade_orb"
        }
        },
        {
        "amount": 3,
        "ingredient": {
        "item": "irons_spellbooks:nature_upgrade_orb"
        }
        },
        {
        "amount": 3,
        "ingredient": {
        "item": "irons_spellbooks:blood_upgrade_orb"
        }
        },
        ],
        "output": {
        "#": 3000,
        "#t": "ae2:f",
        "id": "industrialforegoing:pink_slime"
        }
    })
})