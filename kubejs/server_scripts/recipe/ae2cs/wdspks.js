ServerEvents.recipes(event => {
    event.custom(
        {
  "type": "ae2cs:crystal_aggregator_recipe_serializer",
  "energy_cost": 16000,
  "input_a": {
    "count": 64,
    "item": "hostilenetworks:overworld_prediction"
  },
  "input_b": {
    "count": 64,
    "item": "hostilenetworks:nether_prediction"
  },
  "input_c": {
    "count": 64,
    "item": "hostilenetworks:end_prediction"
  },
  "result": {
    "count": 1,
    "id": "rftoolsbase:dimensionalshard_overworld"
  }
}
)})