ServerEvents.recipes(event => {
    event.custom(
        {
  "type": "ae2lt:lightning_assembly",
  "priority": 0,
  "inputs": [
    {
      "ingredient": {
        "item": "ae2cs:ender_linker"
      },
      "count": 1
    },
    {
      "ingredient": {
        "item": "ae2lt:overload_singularity"
      },
      "count": 1
    },
    {
      "ingredient": {
        "item": "ae2lt:overload_processor"
      },
      "count": 1
    }
  ],
  "result": {
    "id": "ae2lt:overloaded_wireless_connect_tool",
    "count": 1
  },
  "totalEnergy": 1000000,
  "lightningCost": 8,
  "lightningTier": "extreme_high_voltage"
}

)
})