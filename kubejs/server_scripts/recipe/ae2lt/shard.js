ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "ae2lt:overload_processing",
            "priority": 0,
            "inputs": [
            {
            "ingredient": {
            "item": "justdirethings:time_crystal"
            },
            "count": 4
            }],
            "inputFluid": {
            "id": "irons_spellbooks:timeless_slurry",
            "amount": 1000
            },
            "results": [
            {
            "id": "irons_spellbooks:divine_soulshard",
            "count": 4
            }
            ],
            "totalEnergy": 400000,
            "lightningCost": 4,
            "lightningTier": "high_voltage"
    })
})