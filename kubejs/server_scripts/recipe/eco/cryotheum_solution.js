ServerEvents.recipes(event => {
    event.custom(
        {
  "type": "neoecoae:integrated_working_station",
  "energy": 1440000,
  "fluidOutput": {
    "amount": 64000,
    "id": "neoecoae:cryotheum_solution"
  },
  "inputFluid": {
    "amount": 64000,
    "fluid": "ad_astra:cryo_fuel"
  },
  "inputItems": [
    {
      "count": 64,
      "item": "neoecoae:cryotheum_crystal"
    },
    {
      "count": 64,
      "item": "ad_astra:ice_shard"
    },
    {
      "count": 64,
      "item": "neoecoae:energized_crystal"
    },
    {
      "count": 64,
      "item": "powah:dry_ice"
    }
  ],
  }
)})
ServerEvents.recipes(event => {
    event.custom(
        {
  "type": "neoecoae:integrated_working_station",
  "energy": 1440000,
  "itemOutput": {
    "count": 1,
    "id": "anvilcraft:frost_metal_ingot"
  },
  "inputFluid": {
    "amount": 64000,
    "fluid": "ad_astra:cryo_fuel"
  },
  "inputItems": [
    {
      "count": 64,
      "item": "neoecoae:cryotheum_crystal"
    },
    {
      "count": 64,
      "item": "ad_astra:ostrum_ingot"
    }
  ],
  }
)})