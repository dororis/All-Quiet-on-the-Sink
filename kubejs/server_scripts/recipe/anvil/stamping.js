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
})