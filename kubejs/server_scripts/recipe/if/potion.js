ServerEvents.recipes(event => {
    event.custom({
        
  "neoforge:conditions": [
    {
      "type": "neoforge:item_exists",
      "item": "ars_nouveau:starbuncle_shards"
    }
  ],
  "type": "industrialforegoing:dissolution_chamber",
  "input": [
    {
      "item": "anvilcraft:pill"
    },
    {
      "item": "anvilcraft:pill"
    },
    {
      "item": "anvilcraft:pill"
    },
    {
      "item": "anvilcraft:pill"
    },
    {
      "item": "ars_nouveau:wixie_hat"
    },
    {
      "item": "ars_nouveau:source_gem"
    },
    {
      "item": "ars_nouveau:source_gem"
    },
    {
      "item": "ars_nouveau:starbuncle_charm"
    }
  ],
  "inputFluid": {
    "amount": 8000,
    "tag": "c:water"
  },
  "output": {
    "count": 1,
    "id": "ars_nouveau:starbuncle_shards"
  },
  "outputFluid": {
    "amount": 8000,
    "id": "irons_spellbooks:potion"
  },
  "processingTime": 400
    })
})