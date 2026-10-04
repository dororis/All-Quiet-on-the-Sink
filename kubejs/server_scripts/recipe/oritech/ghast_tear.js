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
    "amount": 10,
    "fluid": "industrialforegoing:latex"
  },
  "ingredients": [
    {
      "item": "mekanism:gauge_dropper"
    }
  ],
  "results": [{
      "count": 1,
      "id": "minecraft:ghast_tear"
    }],
  "time": 20
})
})