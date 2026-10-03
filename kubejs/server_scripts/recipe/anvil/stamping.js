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
  })
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
})