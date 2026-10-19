ServerEvents.recipes(event => {
    event.custom(
        {
  "type": "anvilcraft:item_inject",
  "block_ingredient": {
    "blocks": "minecraft:vault"
  },
  "block_result": {
    "block": "minecraft:vault"
  },
  "ingredients": [
    {
      "count": 1,
      "items": "minecraft:trial_key"
    }
  ],
  "results": [
    {
      "count": 32,
      "id": "minecraft:breeze_rod"
    },
    {
      "count": 16,
      "id": "minecraft:heavy_core"
    }
  ]
})
event.custom(
        {
  "type": "anvilcraft:item_inject",
  "block_ingredient": {
    "blocks": "irons_spellbooks:bone_vault"
  },
  "block_result": {
    "block": "irons_spellbooks:bone_vault"
  },
  "ingredients": [
    {
      "count": 1,
      "items": "irons_spellbooks:bone_key"
    }
  ],
  "results": [
    {
      "count": 32,
      "id": "irons_spellbooks:upgrade_orb"
    },
    {
      "count": 16,
      "id": "irons_spellbooks:timeless_slurry"
    }
  ]
})
event.custom(
        {
  "type": "anvilcraft:item_inject",
  "block_ingredient": {
    "blocks": "irons_spellbooks:cinderous_vault"
  },
  "block_result": {
    "block": "irons_spellbooks:cinderous_vault"
  },
  "ingredients": [
    {
      "count": 1,
      "items": "irons_spellbooks:decrepit_key"
    }
  ],
  "results": [
    {
      "count": 24,
      "id": "irons_spellbooks:pyrium_ingot"
    }
  ]
}
)})