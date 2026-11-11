ServerEvents.recipes(event => {
    event.custom(
        {
  "type": "neoecoae:integrated_working_station",
  "energy": 1000000,
  "fluidOutput": {
    "amount": 1000,
    "id": "oritech:still_strange_matter"
  },
  "inputFluid": {
    "amount": 1000,
    "fluid": "neoecoae:cryotheum_solution"
  },
  "inputItems": [
    {
      "count": 1,
      "item": "neoecoae:energized_superconductive_block"
    },
    {
      "count": 1,
      "item": "ae2cs:crystal_grid_block"
    },
    {
      "count": 1,
      "item": "mekanism_extras:alloy_thermonuclear"
    },   
    {
      "count": 1,
      "item": "irons_spellbooks:arcane_essence"
    },
    {
      "count": 1,
      "item": "irons_spellbooks:cinder_essence"
    },
    {
      "count": 1,
      "item": "ae2lt:firmament_mixture"
    },
    {
      "count": 1,
      "item": "ae2lt:floating_matter"
    }
  ],
})
event.custom(
        {
  "type": "neoecoae:integrated_working_station",
  "energy": 1000000,
  "inputFluid": {
    "amount": 1000,
    "fluid": "oritech:still_strange_matter"
  },
  "itemOutput": {
    "count": 1,
    "id": "anvilcraft:multiphase_matter"
  },
  "inputItems": [
    {
      "count": 1,
      "item": "anvilcraft:ember_metal_ingot"
    },
    {
      "count": 1,
      "item": "anvilcraft:frost_metal_ingot"
    }
  ],
})
})