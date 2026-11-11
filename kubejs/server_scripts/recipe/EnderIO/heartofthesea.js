ServerEvents.recipes(event => {
    event.custom(
        {
  "type": "enderio:sag_milling",
  "energy": 24000,
  "input": {
    "item": "minecraft:heart_of_the_sea"
  },
  "outputs": [
    {
      "chance": 0.7,
      "item": {
        "count": 1,
        "id": "minecraft:prismarine_shard"
      }
    },
    {
      "chance": 0.3,
      "item": {
        "count": 1,
        "id": "minecraft:prismarine_crystals"
      }
    },
    {
      "chance": 0.1,
      "item": {
        "count": 1,
        "id": "minecraft:quartz"
      }
    },
    {
      "chance": 0.05,
      "item": {
        "count": 1,
        "id": "minecraft:nautilus_shell"
      }
    }
  ]
})
    event.custom(
        {
  "type": "enderio:sag_milling",
  "energy": 2400,
  "input": {
    "item": "minecraft:nautilus_shell"
  },
  "outputs": [
    {
      "chance": 0.3,
      "item": {
        "count": 1,
        "id": "minecraft:prismarine_shard"
      }
    },
    {
      "chance": 0.1,
      "item": {
        "count": 1,
        "id": "minecraft:prismarine_shard"
      }
    },
    {
      "chance": 0.5,
      "item": {
        "count": 1,
        "id": "minecraft:prismarine_crystals"
      }
    },
    {
      "chance": 0.3,
      "item": {
        "count": 1,
        "id": "minecraft:prismarine_crystals"
      }
    }
  ]
}
    )
})