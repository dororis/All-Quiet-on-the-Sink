ServerEvents.recipes(event => {
    event.custom(
        {
  "type": "anvilcraft:item_inject",
  "ingredients": [
    {
      "items": "minecraft:emerald_block"
    }
  ],
  "block_ingredient": {
    "blocks": "astralsorcery:marble_raw"
  },
  "results": [
    {
      "count": 1,
      "id": "pylons:infusion_pylon"
    }
  ]
})
})