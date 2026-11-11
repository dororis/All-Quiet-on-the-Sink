ServerEvents.recipes(event => {
    event.custom(
        {
  "type": "ae2cs:crystal_aggregator_recipe_serializer",
  "energy_cost": 16000,
  "input_a": {
    "count": 16,
    "item": "replicatemekanism:replica_dust"
  },
  "input_b": {
    "count": 16,
    "item": "ae2:certus_quartz_dust"
  },
  "input_c": {
    "count": 16,
    "item": "ae2lt:firmament_dust"
  },
  "result": {
    "count": 32,
    "id": "kubejs:replicate_seed"
  }
})
event.custom(
        {
  "type": "ae2cs:crystal_aggregator_recipe_serializer",
  "energy_cost": 16000,
  "input_a": {
    "count": 1,
    "item": "kubejs:replicate_seed"
  },
  "input_b": {
    "count": 16,
    "item": "ae2:matter_ball"
  },
  "result": {
    "count": 1,
    "id": "replication:raw_replica"
  }
})
})