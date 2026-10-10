ServerEvents.recipes(event => {
    event.custom({
        
  "neoforge:conditions": [
    {
      "type": "neoforge:item_exists",
      "item": "mifa:efficiency_addon_4"
    }
  ],
  "type": "industrialforegoing:dissolution_chamber",
  "input": [
    {
      "item": "minecraft:sculk"
    },
    {
      "item": "minecraft:echo_shard"
    },
    {
      "tag": "c:glass_panes/colorless"
    },
    {
      "tag": "c:glass_panes/colorless"
    },
    {
      "tag": "c:gears/netherite"
    },
    {
      "item": "industrialforegoing:efficiency_addon_tier_2"
    },
    {
      "tag": "c:rods/blaze"
    },
    {
      "tag": "c:rods/blaze"
    }
  ],
  "inputFluid": {
    "amount": 4000,
    "tag": "c:experience"
  },
  "output": {
    "components": {
      "titanium:augments": {
        "Efficiency": 0.6
      }
    },
    "count": 1,
    "id": "mifa:efficiency_addon_4"
  },
  "processingTime": 800
    })
    event.custom({
        
  "neoforge:conditions": [
    {
      "type": "neoforge:item_exists",
      "item": "mifa:processing_addon_4"
    }
  ],
  "type": "industrialforegoing:dissolution_chamber",
  "input": [
    {
      "item": "minecraft:sculk"
    },
    {
      "item": "minecraft:echo_shard"
    },
    {
      "tag": "c:glass_panes/colorless"
    },
    {
      "tag": "c:glass_panes/colorless"
    },
    {
      "tag": "c:gears/netherite"
    },
    {
      "item": "industrialforegoing:processing_addon_tier_2"
    },
    {
      "tag": "c:rods/blaze"
    },
    {
      "tag": "c:rods/blaze"
    }
  ],
  "inputFluid": {
    "amount": 4000,
    "tag": "c:experience"
  },
  "output": {
    "components": {
      "titanium:augments": {
        "processing": 0.6
      }
    },
    "count": 1,
    "id": "mifa:processing_addon_4"
  },
  "processingTime": 800
    })
    event.custom({
        
  "neoforge:conditions": [
    {
      "type": "neoforge:item_exists",
      "item": "mifa:speed_addon_4"
    }
  ],
  "type": "industrialforegoing:dissolution_chamber",
  "input": [
    {
      "item": "minecraft:sculk"
    },
    {
      "item": "minecraft:echo_shard"
    },
    {
      "tag": "c:glass_panes/colorless"
    },
    {
      "tag": "c:glass_panes/colorless"
    },
    {
      "tag": "c:gears/netherite"
    },
    {
      "item": "industrialforegoing:speed_addon_tier_2"
    },
    {
      "tag": "c:rods/blaze"
    },
    {
      "tag": "c:rods/blaze"
    }
  ],
  "inputFluid": {
    "amount": 4000,
    "tag": "c:experience"
  },
  "output": {
    "components": {
      "titanium:augments": {
        "speed": 0.6
      }
    },
    "count": 1,
    "id": "mifa:speed_addon_4"
  },
  "processingTime": 800
    })
})