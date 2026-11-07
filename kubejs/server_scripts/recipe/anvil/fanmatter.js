ServerEvents.recipes(event => {
  event.custom(
        {
  "type": "anvilcraft:anvil_collision",
  "anvil": {
    "blocks": "#anvilcraft:anvil_tier_2"
  },
  "consume": true,
  "hitBlock": {
    "blocks": "anvilcraft:negative_matter_block"
  },
  "output_items": [
    {
      "count": {
        "type": "minecraft:binomial",
        "n": 8.0,
        "p": 1.0
      },
      "id": "anvilcraft:void_matter"
    },
    {
      "count": {
        "type": "minecraft:binomial",
        "n": 6.0,
        "p": 0.5
      },
      "id": "anvilcraft:void_matter"
    },
    {
      "count": {
        "type": "minecraft:binomial",
        "n": 4.0,
        "p": 0.25
      },
      "id": "anvilcraft:void_matter"
    }
    ,
    {
      "count": {
        "type": "minecraft:binomial",
        "n": 2.0,
        "p": 0.12
      },
      "id": "mekanism:pellet_antimatter"
    }
  ],
  "speed": 256,
  "transform_blocks": []
}
  )})