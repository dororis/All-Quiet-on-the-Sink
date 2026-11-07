ServerEvents.recipes(event => {
    event.custom(
        {
  "type": "anvilcraft:time_warp",
  "consume": 1000,
  "fluid": "anvilcraft:melt_gem",
  "ingredients": [
    {
      "items": "alltheores:peridot"
    }
  ],
  "results": [
    {
      "id": "alltheores:peridot_block"
    }
  ]
}
    )})