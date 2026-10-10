ServerEvents.recipes(event => {
    event.custom(
        {
  "type": "anvilcraft:procedural_process",
  "icon": {
    "count": 1,
    "id": "justdirethings:time_crystal_budding_block"
  },
  "initial_block": {
    "blocks": "kubejs:time_crystal_comb",
  },
  "loop": 1,
  "result_block": {
    "block": "justdirethings:time_crystal_budding_block"
  },
  "steps": [
    {
      "content": {
        "type": "anvilcraft:item_inject",
        "block_ingredient": {
          "blocks": "kubejs:time_crystal_comb",
        },
        "block_result": {
          "block": "anvilcraft:wip_block"
        },
        "ingredients": [
          {
            "items": "powahaddon:crystal_creative"
          }
        ]
      },
      "index": 0
    },
    {
      "content": {
        "type": "anvilcraft:block_processing",
        "inputs": [
          {
            "blocks": "anvilcraft:wip_block"
          },
          {
            "blocks": "anvilcraft:corrupted_beacon",
            "properties": [
              {
                "lit": "true"
              }
            ]
          }
        ],
        "result": {
          "block": "anvilcraft:wip_block"
        }
      },
      "index": 1
    }
  ]
}
)})