ServerEvents.recipes(event => {
    event.custom(
        {
  "type": "ae2lt:firmament_conversion",
  "inputs": [ 
    {
      "ingredient": {
        "item": "ae2:mysterious_cube"
      },
      "count": 1
    },
    {
      "ingredient": {
        "item": "ae2lt:inactive_firmament_spirit_core"
      },
      "count": 1
    },
    {
      "ingredient": {
        "item": "ae2lt:lightning_collapse_matrix"
      },
      "count": 1
    }
  ],
  "results": [
    {
      "id": "ae2lt:firmament_conversion_core",
      "count": 1
    }
  ],
  "processTime": 2000
}

)
})