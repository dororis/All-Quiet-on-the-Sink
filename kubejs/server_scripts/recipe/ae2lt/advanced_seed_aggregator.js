ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "ae2lt:overload_processing",
            "priority": 0,
            "inputs": [
            {
            "ingredient": {
            "item": "mbd2:seed_aggregator"
            },
            "count": 5
            },
            {
            "ingredient": {
            "item": "ae2lt:overload_singularity"
            },
            "count": 1
            }
            ],
            
            
            "results": [
            {
            "id": "mbd2:advanced_seed_aggregator",
            "count": 1
            }
            ],
            "totalEnergy": 5000000,
            "lightningCost": 5,
            "lightningTier": "high_voltage"
    })
})
