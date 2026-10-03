ServerEvents.recipes(event => {
    event.custom(
        {
  "type": "ae2lt:lightning_simulation",
  "priority": 0,
  "inputs": [
    {
      "ingredient": {
        "item": "alltheores:electrum_ingot"
      },
      "count": 1
    }
    
  ],
  "result": {
    "id": "anvilcraft:topaz",
    "count": 1
  },
  "totalEnergy": 10000,
  "lightningCost": 1,
  "lightningTier": "high_voltage"
    })

})