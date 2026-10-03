ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "anvilcraft:mesh",
            "ingredients": [
            {
            "items": "mysticalagriculture:prosperity_ore"
            }
            ],
            "results": [
            {
            "count": {
                "type": "minecraft:binomial",
                "n": 1.0,
                "p": 0.3
            },
            "id": "apotheosis:luminous_crystal_shard"
            },
            {
            "count": {
                "type": "minecraft:binomial",
                "n": 1.0,
                "p": 1
            },
            "id": "mysticalagriculture:prosperity_shard"
            },
            ]
    })
    event.custom(
        {
  "type": "anvilcraft:mesh",
  "ingredients": [
    {
      "items": "anvilcraft:end_dust"
    }
  ],
  "results": [
    {
      "count": {
        "type": "minecraft:binomial",
        "n": 1.0,
        "p": 0.5
      },
      "id": "anvilcraft:end_dust"
    },
    {
      "count": {
        "type": "minecraft:binomial",
        "n": 1.0,
        "p": 0.005
      },
      "id": "minecraft:chorus_flower"
    },
    {
      "count": {
        "type": "minecraft:binomial",
        "n": 1.0,
        "p": 0.1
      },
      "id": "anvilcraft:titanium_nugget"
    },
    {
      "count": {
        "type": "minecraft:binomial",
        "n": 1.0,
        "p": 0.1
      },
      "id": "anvilcraft:levitation_powder"
    },
    {
      "count": {
        "type": "minecraft:binomial",
        "n": 1.0,
        "p": 0.01
      },
      "id": "ae2lt:floating_matter"
    }
  ]
})
})    