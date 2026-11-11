ServerEvents.recipes(event => {
    event.custom(
{
  "neoforge:conditions": [
    {
      "type": "neoforge:not",
      "value": {
        "type": "neoforge:tag_empty",
        "tag": "c:ores/draconium"
      }
    }
  ],
  "type": "industrialforegoing:laser_drill_ore",
  "catalyst": {
    "item": "industrialforegoing:black_laser_lens"
  },
  "entity_data": {
    "data": {},
    "display": "",
    "entity": {
      "type": "draconicevolution:draconic_guardian"
    }
  },
  "output": {
    "count": 1,
    "item": "draconicevolution:chaos_shard"
  },
  "rarity": [
    {
      "biome_filter": {
        "blacklist": [],
        "whitelist": []
      },
      "depth_max": 300,
      "depth_min": 100,
      "dimension_filter": {
        "blacklist": [],
        "whitelist": [
          "minecraft:the_end"
        ]
      },
      "weight": 10
    }
  ]
}

)})