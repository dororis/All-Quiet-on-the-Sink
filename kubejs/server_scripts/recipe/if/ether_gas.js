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
    "item": "minecraft:nether_star"
  },
  "output": {
    "amount": 10,
    "fluid": "industrialforegoing:ether_gas"
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
        "whitelist": ["minecraft:nether"]
      },
      "weight": 16
    }
  ]
}
)})