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
        "item": "ae2cs:purified_certus_quartz_crystal"
        }
        },
        {
        "amount": 1,
        "ingredient": {
        "item": "ae2cs:purified_fluix_crystal"
        }
        },
        {
        "amount": 1,
        "ingredient": {
        "item": "ae2cs:purified_nether_quartz_crystal"
        }
        },
        {
        "amount": 1,
        "ingredient": {
        "item": "ae2cs:purified_ender_quartz"
        }
        },
        {
        "amount": 1,
        "ingredient": {
        "item": "irons_spellbooks:upgrade_orb"
        }
        },
        {
        "amount": 1,
        "ingredient": {
        "item": "ae2cs:purified_meteor_crystal"
        }
        },
        {
        "amount": 1,
        "ingredient": {
        "item": "ae2cs:purified_resonating_crystal"
        }
        },
        {
        "amount": 1,
        "ingredient": {
        "item": "ae2cs:purified_entro_crystal"
        }
        },
        {
        "amount": 1,
        "ingredient": {
        "item": "ae2cs:purified_quantum_crystal"
        }
        },
        ],  
        "output": {
            "#": 8,
            "#t": "ae2:i",
            "id": "irons_spellbooks:cooldown_upgrade_orb"
        }
    }).id('kubejs:cooldown_upgrade_orb')
})
