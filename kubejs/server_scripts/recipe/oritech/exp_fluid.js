ServerEvents.recipes(event => {
    event.custom(
        {
  "neoforge:conditions": [
    {
      "type": "neoforge:mod_loaded",
      "modid": "industrialforegoing"
    }
  ],
  "type": "oritech:centrifuge_fluid",
  "fluidInput": {
    "amount": 1000,
    "fluid": "minecraft:water"
  },
  "fluidOutputs": [
    {
      "amount": 1000,
      "fluid": "anvilcraft:exp_fluid"
    }
  ],
  "ingredients": [
    {
      "item": "anvilcraft:exp_gem"
    }
  ],
  "results": [],
  "time": 20
})
event.custom(
        {
  "neoforge:conditions": [
    {
      "type": "neoforge:mod_loaded",
      "modid": "industrialforegoing"
    }
  ],
  "type": "oritech:centrifuge_fluid",
  "fluidInput": {
    "amount": 8000,
    "fluid": "minecraft:water"
  },
  "fluidOutputs": [
    {
      "amount": 8000,
      "fluid": "anvilcraft:exp_fluid"
    }
  ],
  "ingredients": [
    {
      "item": "anvilcraft:exp_gem_block"
    }
  ],
  "results": [],
  "time": 20
})
})