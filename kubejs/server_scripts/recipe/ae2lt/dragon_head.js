ServerEvents.recipes(event => {
    event.custom(
        {
  "type": "ae2lt:firmament_conversion",
  "inputs": [ 
    {
      "ingredient": {
        "item": "minecraft:netherite_helmet"
      },
      "count": 1
    },
    {
      "ingredient": {
        "item": "ae2lt:firmament_superconducting_wire"
      },
      "count": 1
    }
  ],
  "results": [
    {
      "id": "minecraft:dragon_head",
      "count": 1
    }
  ],
  "processTime": 20
}

)
})