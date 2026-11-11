ServerEvents.recipes(event => {
  event.custom(
        {
  "type": "overload_sim:high_energy_workstation",
  "priority": 10,
  "inputs": [
    {
      "ingredient": {
        "item": "ae2lt:overload_crystal"
      },
      "count": 64
    },
    {
      "ingredient": {
        "item": "ae2:charged_certus_quartz_crystal"
      },
      "count": 64
    },
    {
      "ingredient": {
        "item": "neoecoae:energized_crystal"
      },
      "count": 64
    },
    {
      "ingredient": {
        "item": "neoecoae:energized_fluix_crystal"
      },
      "count": 64
    },
    {
      "ingredient": {
        "item": "appgen:ember_crystal_charged"
      },
      "count": 64
    }
  ],
  "results": [
    {
      "id": "overload_sim:transcendent_crystal",
      "count": 5
    }
  ],
  "totalEnergy": 5,
  "lightningCost": 2,
  "lightningTier": "high_voltage"
}

  )})