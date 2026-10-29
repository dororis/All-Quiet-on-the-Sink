ServerEvents.recipes(event => {
    event.custom(
        {
  "type": "anvilcraft:solid_liquid",
  "fluid": "minecraft:water",
  "ingredients": [
    {
      "items": "minecraft:glass_bottle",
      "count": 3
    },
    {
      "items": "minecraft:phantom_membrane",
      "count": 1
    },
    {
      "items": "minecraft:fermented_spider_eye",
      "count": 1
    },
    {
      "items": "minecraft:popped_chorus_fruit",
      "count": 1
    },
  ],
  "results": [
    {
  "id": "minecraft:potion",
  "count": 3,
  "components": {
    "minecraft:potion_contents": {
      "potion": "apothic_attributes:extra_long_flying"
    }
  }
}
  ]
})
})