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
    "amount": 250,
    "fluid": "minecraft:water"
  },
  "fluidOutputs": [
    {
      "amount": 100,
      "fluid": "industrialforegoing:latex"
    }
  ],
  "ingredients": [
    {
      "item": "anvilcraft:wood_fiber"
    }
  ],
  "results": [],
  "time": 20
})
})