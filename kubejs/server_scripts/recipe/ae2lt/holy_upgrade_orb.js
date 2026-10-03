ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "ae2lt:overload_processing",
            "priority": 0,
            "inputs": [
            {
            "ingredient": {
            "item": "irons_spellbooks:upgrade_orb"
            },
            "count": 1
            },
            {
            "ingredient": {
            "item": "irons_spellbooks:divine_pearl"
            },
            "count": 8
            }
            ],
            "inputFluid": {
            "id": "alltheores:molten_silver",
            "amount": 1000
            },
            
            "results": [
            {
            "id": "irons_spellbooks:holy_upgrade_orb",
            "count": 8
            }
            ],
            "totalEnergy": 1000000,
            "lightningCost": 1,
            "lightningTier": "high_voltage"
    })
})