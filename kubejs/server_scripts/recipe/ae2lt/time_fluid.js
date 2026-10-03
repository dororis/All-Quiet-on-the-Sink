ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "ae2lt:overload_processing",
            "priority": 0,
            "inputs": [
            {
            "ingredient": {
            "item": "irons_spellbooks:cooldown_upgrade_orb"
            },
            "count": 1
            }],

            "inputFluid": {
            "id": "justdirethings:refined_t4_fluid_source",
            "amount": 1000
            },
            "resultFluid": {
            "id": "justdirethings:time_fluid_source",
            "amount": 64000
            },
            
            "totalEnergy": 8000000,
            "lightningCost": 8,
            "lightningTier": "high_voltage"
    })
})