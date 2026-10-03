ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "ae2lt:overload_processing",
            "priority": 0,
            "inputs": [
            {
            "ingredient": {
            "item": "ae2:logic_processor"
            },
            "count": 64
            },
            {
            "ingredient": {
            "item": "ae2:calculation_processor"
            },
            "count": 64
            },
            {
            "ingredient": {
            "item": "ae2:engineering_processor"
            },
            "count": 64
            },
            {
            "ingredient": {
            "item": "extendedae:concurrent_processor"
            },
            "count": 64
            },
            {
            "ingredient": {
            "item": "oritech:unholy_intelligence"
            },
            "count": 1
            },
            {
            "ingredient": {
            "item": "advanced_ae:quantum_processor"
            },
            "count": 64
            },
            {
            "ingredient": {
            "item": "ae2cs:resonating_processor"
            },
            "count": 64
            },
            {
            "ingredient": {
            "item": "ae2omnicells:multidimensional_expansion_processor"
            },
            "count": 64
            },
            {
            "ingredient": {
            "item": "ae2lt:overload_processor"
            },
            "count": 64
            }
            ],
            
            "results": [
            {
            "id": "oritech:heisenberg_compensator",
            "count": 1
            }
            ],
            "totalEnergy": 10000000,
            "lightningCost": 1024,
            "lightningTier": "extreme_high_voltage"
    })
})