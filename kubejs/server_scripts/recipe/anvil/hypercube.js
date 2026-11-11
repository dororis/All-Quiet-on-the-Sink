ServerEvents.recipes(event => {
  event.custom(
        {
  "type": "anvilcraft:procedural_process",
  "icon": {
    "count": 1,
    "id": "anvilcraft:hypercube"
  },
  "initial_block": {
    "blocks": "anvilcraft:tempering_glass"
  },
  "loop": 3,
  "multiple_loop_first_step": {
    "content": {
      "type": "anvilcraft:block_compress",
      "inputs": [
        { "blocks": "anvilcraft:tempering_glass" },
        { "blocks": "anvilcraft:wip_block" }
      ],
      "result": { "block": "anvilcraft:wip_block" }
    },
    "index": 0
  },
  "result_block": {
    "block": "anvilcraft:hypercube"
  },
  "steps": [
    {
      "content": {
        "type": "anvilcraft:block_compress",
        "inputs": [
          { "blocks": "anvilcraft:tempering_glass" },
          { "blocks": "anvilcraft:tempering_glass" }
        ],
        "result": { "block": "anvilcraft:wip_block" }
      },
      "index": 0
    },
    {
      "content": {
        "type": "anvilcraft:block_compress",
        "inputs": [
          { "blocks": "anvilcraft:tempering_glass" },
          { "blocks": "anvilcraft:wip_block" }
        ],
        "result": { "block": "anvilcraft:wip_block" }
      },
      "index": 1
    },
    {
      "content": {
        "type": "anvilcraft:block_compress",
        "inputs": [
          { "blocks": "anvilcraft:tempering_glass" },
          { "blocks": "anvilcraft:wip_block" }
        ],
        "result": { "block": "anvilcraft:wip_block" }
      },
      "index": 2
    },
    {
      "content": {
        "type": "anvilcraft:block_compress",
        "inputs": [
          { "blocks": "anvilcraft:tempering_glass" },
          { "blocks": "anvilcraft:wip_block" }
        ],
        "result": { "block": "anvilcraft:wip_block" }
      },
      "index": 3
    },
    {
      "content": {
        "type": "anvilcraft:block_compress",
        "inputs": [
          { "blocks": "anvilcraft:tempering_glass" },
          { "blocks": "anvilcraft:wip_block" }
        ],
        "result": { "block": "anvilcraft:wip_block" }
      },
      "index": 4
    },
    {
      "content": {
        "type": "anvilcraft:block_compress",
        "inputs": [
          { "blocks": "anvilcraft:tempering_glass" },
          { "blocks": "anvilcraft:wip_block" }
        ],
        "result": { "block": "anvilcraft:wip_block" }
      },
      "index": 5
    },
    {
      "content": {
        "type": "anvilcraft:block_compress",
        "inputs": [
          { "blocks": "anvilcraft:tempering_glass" },
          { "blocks": "anvilcraft:wip_block" }
        ],
        "result": { "block": "anvilcraft:wip_block" }
      },
      "index": 6
    },
    {
      "content": {
        "type": "anvilcraft:block_compress",
        "inputs": [
          { "blocks": "anvilcraft:tempering_glass" },
          { "blocks": "anvilcraft:wip_block" }
        ],
        "result": { "block": "anvilcraft:wip_block" }
      },
      "index": 7
    },
    {
      "content": {
        "type": "anvilcraft:block_compress",
        "inputs": [
          { "blocks": "anvilcraft:tempering_glass" },
          { "blocks": "anvilcraft:wip_block" }
        ],
        "result": { "block": "anvilcraft:wip_block" }
      },
      "index": 8
    },
    {
      "content": {
        "type": "anvilcraft:item_inject",
        "block_ingredient": {
          "blocks": "anvilcraft:wip_block"
        },
        "block_result": {
          "block": "anvilcraft:wip_block"
        },
        "ingredients": [
          {
            "items": "extendedae_plus:spatial_core"
          }
        ]
      },
      "index": 9
    }
  ]
})
})