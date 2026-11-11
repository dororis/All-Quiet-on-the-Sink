ServerEvents.recipes(event => {
    event.custom(
    {
        "type": "ae2lt:lightning_simulation",
        "priority": 0,
        "inputs": [
    {
        "ingredient": {
        "item": "mekanism_extras:cosmic_induction_provider",
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
        "custom_data": '{CellType:3b}'
    },
        "count": 1
    },
    "totalEnergy": 640000000,
    "lightningCost": 1,
    "lightningTier": "extreme_high_voltage"
    })
})