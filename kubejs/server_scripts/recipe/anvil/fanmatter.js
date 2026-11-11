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
})
event.custom(
        {
  "type": "anvilcraft:anvil_collision",
  "anvil": {
    "blocks": "#anvilcraft:anvil_tier_3"
  },
  "consume": true,
  "hitBlock": {
    "blocks": "allthecompressed:antimatter_block"
  },
  "output_items": [
    {
      "count": {
        "type": "minecraft:binomial",
        "n": 8.0,
        "p": 1.0
      },
      "id": "mekanism:pellet_antimatter"
    },
    {
      "count": {
        "type": "minecraft:binomial",
        "n": 6.0,
        "p": 0.5
      },
      "id": "mekanism:pellet_antimatter"
    },
    {
      "count": {
        "type": "minecraft:binomial",
        "n": 4.0,
        "p": 0.25
      },
      "id": "mekanism:pellet_antimatter"
    }
    ,
    {
      "count": {
        "type": "minecraft:binomial",
        "n": 2.0,
        "p": 0.12
      },
      "id": "mekmm:uu_matter"
    }
  ],
  "speed": 256,
  "transform_blocks": []
})
event.custom({
  "type": "anvilcraft:anvil_collision",
  "anvil": {
    "blocks": "#anvilcraft:anvil_tier_3"
  },
  "consume": false,
  "hitBlock": {
    "blocks": "neoecoprototype:fumo_doll_yang120_giant"
  },
  "output_items": [
    { "count": {
        "type": "minecraft:binomial",
        "n": 1.0,
        "p": 1.0
      },"id": "ae2omnicells:omni_cell_component_256m" },
    { "count": {
        "type": "minecraft:binomial",
        "n": 1.0,
        "p": 1.0
      },"id": "ae2omnicells:complex_omni_cell_component_256m" },
    { "count": {
        "type": "minecraft:binomial",
        "n": 1.0,
        "p": 1.0
      },"id": "ae2omnicells:quantum_omni_cell_component_256m" },
    { "count": {
        "type": "minecraft:binomial",
        "n": 1.0,
        "p": 1.0
      },"id": "appgen:generating_component_256m" },
    { "count": {
        "type": "minecraft:binomial",
        "n": 1.0,
        "p": 1.0
      },"id": "appflux:core_256m" },
    { "count": {
        "type": "minecraft:binomial",
        "n": 1.0,
        "p": 1.0
      },"id": "neoecoae:eco_cell_component_256m" },
    { "count": {
        "type": "minecraft:binomial",
        "n": 1.0,
        "p": 1.0
      },"id": "ae2lt:bulk_lightning_cell_component" },
    { "count": {
        "type": "minecraft:binomial",
        "n": 1.0,
        "p": 1.0
      },"id": "megacells:cell_component_256m" },
    { "count": {
        "type": "minecraft:binomial",
        "n": 1.0,
        "p": 1.0
      },
      "id": "neoecoae:eco_infinite_cell_component" }
  ],
  "speed": 256,
  "transform_blocks": []
})
})