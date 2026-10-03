ServerEvents.recipes(event => {
  event.custom(
    {
  "type": "anvilcraft:mob_transform_with_item",
  "chance_percent_per_item": 5,
  "ingredients": [
    {
      "items": "minecraft:anvil"
    }
  ],
  "input": "minecraft:pig",
  "item_result": {
    "count": 1,
    "id": "anvilcraft:giant_anvil"
  },
  "special_result": {
    "probability": 1.0,
    "result_entity_type": "allthemodium:piglich"
  }
}
)
})