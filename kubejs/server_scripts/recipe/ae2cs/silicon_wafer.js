ServerEvents.recipes(event => {
    event.custom(
        {
  "type": "ae2cs:crystal_aggregator_recipe_serializer",
  "energy_cost": 16000,
  "input_a": {
    "count": 8,
    "item": "mekanism_extras:dust_naquadah"
  },
  "input_b": {
    "count": 4,
    "item": "oritech:carbon_fibre_strands"
  },
  "result": {
    "count": 4,
    "id": "oritech:silicon_wafer"
  }
})
event.custom(
        {
  "type": "ae2cs:crystal_aggregator_recipe_serializer",
  "energy_cost": 24000,
  "input_a": {
    "count": 8,
    "item": "oritech:processing_unit"
  },
  "input_b": {
    "count": 4,
    "item": "oritech:silicon_wafer"
  },
  "result": {
    "count": 4,
    "id": "oritech:advanced_computing_engine"
  }
})
event.custom(
        {
  "type": "ae2cs:crystal_aggregator_recipe_serializer",
  "energy_cost": 36000,
  "input_a": {
    "count": 8,
    "item": "alltheores:signalum_ingot"
  },
  "input_b": {
    "count": 4,
    "item": "oritech:advanced_computing_engine"
  },
  "result": {
    "count": 4,
    "id": "oritech:super_ai_chip"
  }
})
event.custom(
        {
  "type": "ae2cs:crystal_aggregator_recipe_serializer",
  "energy_cost": 36000,
  "input_a": {
    "count": 8,
    "item": "ae2cs:purified_data_crystal"
  },
  "input_b": {
    "count": 4,
    "item": "oritech:super_ai_chip"
  },
  "result": {
    "count": 4,
    "id": "oritech:prometheum_ingot"
  }
})
event.custom(
        {
  "type": "ae2cs:crystal_aggregator_recipe_serializer",
  "energy_cost": 36000,
  "input_a": {
    "count": 16,
    "item": "enderio:vibrant_powder"
  },
  "input_b": {
    "count": 8,
    "item": "alltheores:signalum_dust"
  },
  "input_c": {
    "count": 16,
    "item": "enderio:pulsating_powder"
  },
  "result": {
    "count": 32,
    "id": "ae2cs:data_crystal_seed"
  }
})
})