ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "ae2lt:overload_processing",
            "priority": 0,
            "inputs": [
            {
            "ingredient": {
            "item": "jdte:extended_time_accelerator"
            },
            "count": 1
            },
            {
            "ingredient": {
            "item": "ae2lt:atmospheric_ionizer"
            },
            "count": 1
            },
            {
            "ingredient": {
            "item": "irons_spellbooks:timeless_slurry"
            },
            "count": 64
            }
        ],
            "inputFluid": {
            "id": "justdirethings:time_fluid_source",
            "amount": 64000
            },
            "results": [
            {
            "id": "jdte:time_freezer",
            "count": 1
            }
            ],
            "totalEnergy": 640000,
            "lightningCost": 8,
            "lightningTier": "extreme_high_voltage"
    })
})