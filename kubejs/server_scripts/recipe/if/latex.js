ServerEvents.recipes(event => {
    event.custom(
        {
  "neoforge:conditions": [
    {
      "type": "neoforge:mod_loaded",
      "modid": "minecraft"
    }
  ],
  "type": "industrialforegoing:laser_drill_fluid",
  "catalyst": {
    "item": "anvilcraft:resin_block"
  },
  "output": {
    "amount": 50,
    "fluid": "industrialforegoing:latex"
  },
  "rarity": [
    {
      "biome_filter": {
        "blacklist": [],
        "whitelist": []
      },
      "depth_max": 256,
      "depth_min": -64,
      "dimension_filter": {
        "blacklist": [],
        "whitelist": []
      },
      "weight": 16
    }
  ]
}
)})