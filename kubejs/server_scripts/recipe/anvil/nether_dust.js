ServerEvents.recipes(event => {
    event.custom(
        {
  "type": "anvilcraft:mesh",
  "ingredients": [
    {
      "items": "anvilcraft:nether_dust"
    }
  ],
  "results": [
    {
      "count": {
        "type": "minecraft:binomial",
        "n": 1.0,
        "p": 0.5
      },
      "id": "mysticalagriculture:nether_essence"
    },
    {
      "count": {
        "type": "minecraft:binomial",
        "n": 1.0,
        "p": 0.4
      },
      "id": "alltheores:ruby_dust"
    },
    {
      "count": {
        "type": "minecraft:binomial",
        "n": 1.0,
        "p": 0.3
      },
      "id": "minecraft:netherite_scrap"
    },
    {
      "count": {
        "type": "minecraft:binomial",
        "n": 1.0,
        "p": 0.3
      },
      "id": "productivebees:wither_skull_chip"
    },
    {
      "count": {
        "type": "minecraft:binomial",
        "n": 1.0,
        "p": 0.4
      },
      "id": "minecraft:ghast_tear"
    },
    {
      "count": {
        "type": "minecraft:binomial",
        "n": 1.0,
        "p": 0.3
      },
      "id": "mysticalagradditions:nether_star_shard"
    },
    {
      "count": {
        "type": "minecraft:binomial",
        "n": 1.0,
        "p": 0.2
      },
      "id": "anvilcraft:tungsten_nugget"
    }
  ]
}
)})