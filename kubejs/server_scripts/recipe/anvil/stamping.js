ServerEvents.recipes(event => {
  event.custom({
    type: "anvilcraft:stamping",
    ingredients: [
      {
        items: "minecraft:polished_blackstone"
      },
      {
        items:"minecraft:nether_wart"
      }
    ],
    results: [
      {
        id: "pylons:potion_filter",
        count: 1
      }
    ]
  }).id('kubejs:potion_filter')
  event.custom({
    type: "anvilcraft:stamping",
    ingredients: [
      {
        items: "hostilenetworks:overworld_prediction"
      },
      {
        items:"hostilenetworks:nether_prediction"
      },
      {
        items:"hostilenetworks:end_prediction"
      }
    ],
    results: [
      {
        id: "irons_spellbooks:arcane_essence",
        count: 3
      }
    ]
  })
  event.custom({
    type: "anvilcraft:stamping",
    ingredients: [
      {
        items: "anvilcraft:royal_steel_upgrade_smithing_template"
      },
      {
        items:"allthemodium:allthemodium_ingot"
      }
    ],
    results: [
      {
        id: "allthemodium:allthemodium_upgrade_smithing_template",
        count: 1
      }
    ]
  })
  event.custom({
    type: "anvilcraft:stamping",
    ingredients: [
      {
        items: "anvilcraft:royal_steel_upgrade_smithing_template"
      },
      {
        items:"allthemodium:vibranium_ingot"
      }
    ],
    results: [
      {
        id: "allthemodium:vibranium_upgrade_smithing_template",
        count: 1
      }
    ]
  })
  event.custom({
    type: "anvilcraft:stamping",
    ingredients: [
      {
        items: "anvilcraft:royal_steel_upgrade_smithing_template"
      },
      {
        items:"allthemodium:unobtainium_ingot"
      }
    ],
    results: [
      {
        id: "allthemodium:unobtainium_upgrade_smithing_template",
        count: 1
      }
    ]
  })
  event.custom({
    type: "anvilcraft:stamping",
    ingredients: [
      {
        items: "anvilcraft:royal_steel_upgrade_smithing_template"
      },
      {
        items:"minecraft:netherite_ingot"
      }
    ],
    results: [
      {
        id: "minecraft:netherite_upgrade_smithing_template",
        count: 1
      }
    ]
  })
  event.custom({
    type: "anvilcraft:stamping",
    ingredients: [
      {
        items: "ae2lt:pigmee_fumo"
      }
    ],
    results: [
      {
        id: "ae2lt:pigmee_core",
        count: 1
      }
    ]
  })
  event.custom({
    type: "anvilcraft:stamping",
    ingredients: [
      {
        items: "minecraft:heavy_core"
      },
      {
        items:"minecraft:lightning_rod"
      }
    ],
    results: [
      {
        id: "minecraft:trial_key",
        count: 1
      }
    ]
  })
  event.custom({
    type: "anvilcraft:stamping",
    ingredients: [
      {
        items: "mekanism:enriched_redstone"
      },
      {
        items:"alltheores:osmium_ingot",
        count: 4
      }
    ],
    results: [
      {
        id: "mekanism:basic_control_circuit",
        count: 4
      }
    ]
  })
  event.custom({
    type: "anvilcraft:stamping",
    ingredients: [
      {
        items: "mekanism:steel_casing"
      },
      {
        items:"mekanism:basic_control_circuit"
      },
      {
        items:"minecraft:furnace"
      }
    ],
    results: [
      {
        id: "mekanism:basic_infusing_factory",
        count: 1
      }
    ]
  })
  event.custom({
    type: "anvilcraft:stamping",
    ingredients: [
      {
        items: "mekanism:steel_casing"
      },
      {
        items:"mekanism:basic_control_circuit"
      },
      {
        items:"minecraft:lava_bucket"
      }
    ],
    results: [
      {
        id: "mekanism:basic_crushing_factory",
        count: 1
      }
    ]
  })
  event.custom({
    type: "anvilcraft:stamping",
    ingredients: [
      {
        items: "mekanism:steel_casing"
      },
      {
        items:"mekanism:basic_control_circuit"
      },
      {
        items:"minecraft:redstone"
      }
    ],
    results: [
      {
        id: "mekanism:basic_enriching_factory",
        count: 1
      }
    ]
  })
  event.custom({
    type: "anvilcraft:stamping",
    ingredients: [
      {
        items: "sophisticatedstorage:upgrade_base"
      },
      {
        items:"mekanism:alloy_infused"
      },
      {
        items:"alltheores:gold_dust"
      },
      {
        items:"alltheores:osmium_dust"
      }
    ],
    results: [
      {
        id: "mekanism:upgrade_energy",
        count: 1
      },
      {
        id: "mekanism:upgrade_speed",
        count: 1
      }
    ]
  })
  event.custom({
    type: "anvilcraft:stamping",
    ingredients: [
      {
        items: "minecraft:redstone",
        count: 8
      }
    ],
    results: [
      {
        id: "mekanism:enriched_redstone",
        count: 1
      }
    ]
  })
  event.custom({
    type: "anvilcraft:stamping",
    ingredients: [
      {
        items: "minecraft:diamond",
        count: 8
      }
    ],
    results: [
      {
        id: "mekanism:enriched_diamond",
        count: 1
      }
    ]
  })
  event.custom({
    type: "anvilcraft:stamping",
    ingredients: [
      {
        items: "mekanism:dust_obsidian",
        count: 4
      },
      {
        items: "minecraft:diamond",
        count: 4
      }
    ],
    results: [
      {
        id: "mekanism:enriched_refined_obsidian",
        count: 1
      }
    ]
  })
  event.custom({
    type: "anvilcraft:stamping",
    ingredients: [
      {
        items: "mekanism:alloy_infused",
        count: 1
      },
      {
        items: "mekanism:basic_control_circuit",
        count: 1
      }
    ],
    results: [
      {
        id: "mekanism:advanced_control_circuit",
        count: 1
      }
    ]
  })
  event.custom({
    type: "anvilcraft:stamping",
    ingredients: [
      {
        items: "mekanism:alloy_reinforced",
        count: 1
      },
      {
        items: "mekanism:advanced_control_circuit",
        count: 1
      }
    ],
    results: [
      {
        id: "mekanism:elite_control_circuit",
        count: 1
      }
    ]
  })
  event.custom({
    type: "anvilcraft:stamping",
    ingredients: [
      {
        items: "mekanism:alloy_atomic",
        count: 1
      },
      {
        items: "mekanism:elite_control_circuit",
        count: 1
      }
    ],
    results: [
      {
        id: "mekanism:ultimate_control_circuit",
        count: 1
      }
    ]
  })
  event.custom({
    type: "anvilcraft:stamping",
    ingredients: [
      {
        items: "mekanism:enriched_redstone",
        count: 1
      },
      {
        items: "minecraft:copper_ingot",
        count: 8
      }
    ],
    results: [
      {
        id: "mekanism:alloy_infused",
        count: 8
      }
    ]
  })
  event.custom({
    type: "anvilcraft:stamping",
    ingredients: [
      {
        items: "mekanism:enriched_diamond",
        count: 1
      },
      {
        items: "mekanism:alloy_infused",
        count: 4
      }
    ],
    results: [
      {
        id: "mekanism:alloy_reinforced",
        count: 4
      }
    ]
  })
  event.custom({
    type: "anvilcraft:stamping",
    ingredients: [
      {
        items: "mekanism:enriched_refined_obsidian",
        count: 1
      },
      {
        items: "mekanism:alloy_reinforced",
        count: 2
      }
    ],
    results: [
      {
        id: "mekanism:alloy_atomic",
        count: 2
      }
    ]
  })
  event.custom({
    type: "anvilcraft:item_crush",
    ingredients: [
      {
        items: "apotheosis:godforged_pearl"
      }
    ],
    results: [
      {
        id: "ae2:matter_ball",
        count: 64
      }
    ]
  })
  event.custom({
    type: "anvilcraft:item_crush",
    ingredients: [
      {
        items: "minecraft:obsidian"
      }
    ],
    results: [
      {
        id: "mekanism:dust_obsidian",
        count: 4
      }
    ]
  })
  event.custom({
    type: "anvilcraft:item_crush",
    ingredients: [
      {
        items: "alltheores:osmium_ingot"
      }
    ],
    results: [
      {
        id: "alltheores:osmium_dust",
        count: 1
      }
    ]
  })
  event.custom({
    type: "anvilcraft:item_crush",
    ingredients: [
      {
        items: "alltheores:raw_osmium",
        count: 3
      }
    ],
    results: [
      {
        id: "alltheores:osmium_dust",
        count: 4
      }
    ]
  })
  event.custom({
    type: "anvilcraft:item_crush",
    ingredients: [
      {
        items: "minecraft:raw_gold",
        count: 3
      }
    ],
    results: [
      {
        id: "alltheores:gold_dust",
        count: 4
      }
    ]
  })
})