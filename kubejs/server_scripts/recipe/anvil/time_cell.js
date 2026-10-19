ServerEvents.recipes(event => {
    event.custom(
        {
  "type": "anvilcraft:time_warp",
  "consume": 64000,
  "fluid": "justdirethings:time_fluid_source",
  "ingredients": [
    {
      "count": 64,
      "items": "irons_spellbooks:timeless_slurry"
    },
    {
      "count": 1,
      "items": "neoecoprototype:simplify_concrete_storage_matrix_housing"
    }
  ],
  "results": [
    {
      "id": "kubejs:time_fluid_cell"
    }
  ]
}
)})