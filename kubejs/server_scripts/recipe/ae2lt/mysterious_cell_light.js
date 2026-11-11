ServerEvents.recipes(event => {
    event.custom(
    {
        "type": "ae2lt:lightning_simulation",
        "priority": 0,
        "inputs": [
    {
        "ingredient": {
        "item": "ae2lt:bulk_lightning_storage_component",
    }, 
        "count": 64
    },
    {
        "ingredient": {
        "item": "ae2lt:lightning_collapse_matrix"
      },
        "count": 16
    }
    ],
        "result": {
        "id": "ae2lt:mysterious_cell",
        "components": {
        "custom_data": '{CellType:1b}'
    },
        "count": 1
    },
    "totalEnergy": 64000000,
    "lightningCost": 16384,
    "lightningTier": "extreme_high_voltage"
    })
    event.custom(
    {
        "type": "ae2lt:lightning_simulation",
        "priority": 0,
        "inputs": [
    {
        "ingredient": {
        "item": "ae2lt:bulk_lightning_storage_component",
    }, 
        "count": 64
    },
    {
        "ingredient": {
        "item": "ae2lt:lightning_collapse_matrix"
      },
        "count": 16
    },
    {
        "ingredient": {
        "item": "overload_sim:transcendent_crystal"
      },
        "count": 1024
    }
    ],
        "result": {
        "id": "ae2lt:mysterious_cell",
        "components": {
        "custom_data": '{CellType:2b}'
    },
        "count": 1
    },
    "totalEnergy": 64000000,
    "lightningCost": 16384,
    "lightningTier": "extreme_high_voltage"
    })
})