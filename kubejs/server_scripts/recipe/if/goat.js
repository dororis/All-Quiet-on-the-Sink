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
    "item": "anvilcraft:spectral_anvil"
  },
  "entity_data": {
    "data": {},
    "display": "",
    "entity": {
      "type": "ad_astra:glacian_ram"
    }
  },
  "output": {
    "count": 1,
    "item": "anvilcraft:negative_matter_nugget"
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
        "whitelist": [
          "ad_astra:glacio"
        ]
      },
      "weight": 1
    }
  ]
}
).id('kubejs:goat')
})