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
            },
            {
            "ingredient": {
            "item": "irons_spellbooks:timeless_slurry"
            },
            "count": 4
            }],
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
    event.custom(
        {
            "type": "ae2lt:overload_processing",
            "priority": 0,
            "inputs": [
            {
            "ingredient": {
            "item": "minecraft:echo_shard"
            },
            "count": 64
            }],
            "inputFluid": {
            "id": "justdirethings:refined_t3_fluid_source",
            "amount": 16000
            },
            "results": [
            {
            "id": "ae2cs:purified_resonating_crystal",
            "count": 64
            }
            ],
            "totalEnergy": 640000,
            "lightningCost": 1,
            "lightningTier": "high_voltage"
    })
})
