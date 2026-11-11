ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "ae2lt:overload_processing",
            "priority": 0,
            "inputs": [
            {
            "ingredient": {
            "item": "ae2cs:purified_certus_quartz_crystal"
            },
            "count": 1
            },
            {
            "ingredient": {
            "item": "ae2cs:purified_fluix_crystal"
            },
            "count": 1
            },
            {
            "ingredient": {
            "item": "ae2cs:purified_nether_quartz_crystal"
            },
            "count": 1
            },
            {
            "ingredient": {
            "item": "ae2cs:purified_ender_quartz"
            },
            "count": 1
            },
            {
            "ingredient": {
            "item": "irons_spellbooks:upgrade_orb"
            },
            "count": 1
            },
            {
            "ingredient": {
            "item": "ae2cs:purified_meteor_crystal"
            },
            "count": 1
            },
            {
            "ingredient": {
            "item": "ae2cs:purified_resonating_crystal"
            },
            "count": 1
            },
            {
            "ingredient": {
            "item": "ae2cs:purified_entro_crystal"
            },
            "count": 1
            },
            {
            "ingredient": {
            "item": "ae2cs:purified_quantum_crystal"
            },
            "count": 1
            }
            ],
            "inputFluid": {
            "id": "alltheores:molten_silver",
            "amount": 1000
            },
            
            "results": [
            {
            "id": "irons_spellbooks:cooldown_upgrade_orb",
            "count": 8
            }
            ],
            "totalEnergy": 1000000,
            "lightningCost": 1,
            "lightningTier": "high_voltage"
    })
})