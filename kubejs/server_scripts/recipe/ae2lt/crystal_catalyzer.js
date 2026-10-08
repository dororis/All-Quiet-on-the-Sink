ServerEvents.recipes(event => {
    event.custom(
        {
  "type": "ae2lt:lightning_assembly",
  "priority": 0,
  "inputs": [
    {
      "ingredient": {
        "item": "jdte:crystal_incubator"
      },
      "count": 16
    },
    {
      "ingredient": {
        "item": "extendedae:crystal_fixer"
      },
      "count": 16
    },
    {
      "ingredient": {
        "item": "ae2lt:pigmee_crystal_catalyzer"
      },
      "count": 16
    },
    {
      "ingredient": {
        "item": "ae2lt:overload_machine_frame"
      },
      "count": 1
    },
    {
      "ingredient": {
        "item": "ae2lt:overload_singularity"
      },
      "count": 1
    }
  ],
  "result": {
    "id": "ae2lt:crystal_catalyzer",
    "count": 1
  },
  "totalEnergy": 1000000,
  "lightningCost": 32,
  "lightningTier": "extreme_high_voltage"
}

)
})
