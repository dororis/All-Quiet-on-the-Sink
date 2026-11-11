ServerEvents.recipes(event => {
    event.custom(
        {
  "type": "ae2lt:firmament_conversion",
  "inputs": [ 
    {
      "ingredient": {
        "item": "minecraft:egg"
      },
      "count": 1
    },
    {
      "ingredient": {
        "item": "minecraft:heavy_core"
      },
      "count": 64
    },
    {
      "ingredient": {
        "item": "ae2lt:floating_matter"
      },
      "count": 64
    }
  ],
  "results": [
    {
      "id": "minecraft:dragon_egg",
      "count": 1
    }
  ],
  "processTime": 20
}

)
})