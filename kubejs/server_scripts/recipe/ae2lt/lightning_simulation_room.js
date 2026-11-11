ServerEvents.recipes(event => {
    event.custom(
    {
        "type": "ae2lt:lightning_simulation",
        "priority": 0,
        "inputs": [
    {
        "ingredient": {
        "item": "ae2lt:overload_processor"
      },
        "count": 32
    },
    {
        "ingredient": {
        "item": "ae2lt:overload_alloy"
      },
        "count": 32
    },
    {
        "ingredient": {
        "item": "extendedae:ex_inscriber"
      },
        "count": 16
    }
    ],
        "result": {
        "id": "ae2lt:lightning_simulation_room",
        "count": 1
    },
    "totalEnergy": 160000,
    "lightningCost": 16,
    "lightningTier": "high_voltage"
    })
})