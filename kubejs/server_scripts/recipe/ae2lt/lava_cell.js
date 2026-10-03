ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "ae2lt:overload_processing",
            "priority": 0,
            "inputs": [
            {
            "ingredient": {
            "item": "ae2lt:basic_topological_lattice"
            },
            "count": 64
            }],

            "inputFluid": {
            "id": "minecraft:lava",
            "amount": 1000000
            },
            "results": [
            {
            "id": "kubejs:lava_cell",
            "count": 1
            }
            ],
            "totalEnergy": 10000000,
            "lightningCost": 1,
            "lightningTier": "high_voltage"
    })
})
