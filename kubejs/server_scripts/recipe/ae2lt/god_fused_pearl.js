ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "ae2lt:overload_processing",
            "priority": 0,
            "inputs": [
            {
            "ingredient": {
            "item": "irons_spellbooks:holy_upgrade_orb"
            },
            "count": 1
            }
            ],
            "inputFluid": {
            "id": "anvilcraft:melt_gem",
            "amount": 1000
            },
            
            
            "results": [
            {
            "id": "apotheosis:godforged_pearl",
            "count": 64
            }
            ],
            "totalEnergy": 8000000,
            "lightningCost": 8,
            "lightningTier": "extreme_high_voltage"
    })
})
