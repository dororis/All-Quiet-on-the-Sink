ServerEvents.recipes(event => {
    event.custom(
        {
  "type": "anvilcraft:solid_liquid",
  "consume": 1000,
  "fluid":   "justdirethings:polymorphic_fluid_source",
  "ingredients": [{
      "items": "anvilcraft:exp_gem",
      "count": 1
    }],
  "results": [],
  "transform": [
    {
    "amount": 1000,
    "id": "justdirethings:refined_t2_fluid_source"
    }
    ]
})
event.custom(
        {
  "type": "anvilcraft:solid_liquid",
  "consume": 1000,
  "fluid": "anvilcraft:exp_fluid",
  "ingredients": [{
      "items": "rftoolsbase:dimensionalshard",
      "count": 1
    }],
  "results": [],
  "transform": [
    {
    "amount": 1000,
    "id": "irons_spellbooks:blood"
    }
    ]
})
event.custom(
        {
  "type": "anvilcraft:solid_liquid",
  "consume": 1000,
  "fluid": "allthemodium:soul_lava",
  "ingredients": [{
      "items": "minecraft:soul_campfire",
      "count": 1
    }],
  "results": [{
      "count": 1,
      "id": "anvilcraft_pigsplus:soulbound_campfire"
    }],
})
})
ServerEvents.recipes(event => {
    event.custom(
        {
  "type": "anvilcraft_pigsplus:soul_vine_growth",
  "consume": 1000,
  "fluid": "justdirethings:polymorphic_fluid_source",
  "ingredients": [
    {
      "count": 1,
      "items": "rftoolsbase:dimensionalshard"
    }
  ],
  "results": [
    {
      "count": 3,
      "id": "rftoolsbase:dimensionalshard"
    }
  ]
}
    )})