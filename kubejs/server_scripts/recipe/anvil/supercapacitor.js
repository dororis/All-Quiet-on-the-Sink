ServerEvents.recipes(event => {
    event.custom(
        {
  "type": "anvilcraft:item_compress",
  "ingredients": [
    {
      "count": 2,
      "items": "minecraft:copper_block"
    },
    {
      "count": 1,
      "items": "ae2:energy_cell"
    }
  ],
  "results": [
    {
      "id": "anvilcraft:supercapacitor_empty"
    }
  ]
})
event.custom({
  "type": "anvillib_recipe:in_world_recipe",
  "compatible": true,
  "conflicting": [
    {
      "type": "anvillib_recipe:has_item_ingredient",
      "item": {
        "count": 2,
        "items": "minecraft:copper_block"
      },
      "offset": [
        0.0,
        -0.375,
        0.0
      ],
      "range": [
        0.75,
        0.75,
        0.75
      ]
    },
    {
      "type": "anvillib_recipe:has_item_ingredient",
      "item": {
        "items": "enderio_evolution:undying_totem_capacitor"
      },
      "offset": [
        0.0,
        -0.375,
        0.0
      ],
      "range": [
        0.75,
        0.75,
        0.75
      ]
    }
  ],
  "icon": {
    "count": 1,
    "id": "anvilcraft:supercapacitor"
  },
  "non_conflicting": [
    {
      "type": "anvilcraft:has_cauldron",
      "fluid": {
        "amount": 0
      },
      "offset": [
        0.0,
        -1.0,
        0.0
      ]
    }
  ],
  "outcomes": [
    {
      "type": "anvillib_recipe:choose_one",
      "choices": [
        {
          "outcome": {
            "type": "anvillib_recipe:produce_explosion",
            "fire": true,
            "interact": "block",
            "offset": [
              0.0,
              -0.75,
              0.0
            ],
            "power": 1.0
          },
          "weight": 0.5
        },
        {
          "outcome": {
            "type": "anvillib_recipe:spawn_item",
            "item": "anvilcraft:supercapacitor",
            "offset": [
              0.0,
              -0.75,
              0.0
            ]
          },
          "weight": 0.5
        }
      ]
    }
  ],
  "priority": 5,
  "trigger": "anvilcraft:on_anvil_fall_on"
}
)})