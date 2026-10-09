ServerEvents.recipes(event => {
    event.custom(
        {
  "type": "anvilcraft:solid_liquid",
  "fluid": "minecraft:water",
  "ingredients": [
    {
      "items": "ae2cs:nether_quartz_seed",
      "count": 1
    }
  ],
  "results": [
    {
      "id": "ae2cs:purified_nether_quartz_crystal",
      "count": 1
    }
  ]
})
    event.custom(
        {
  "type": "anvilcraft:solid_liquid",
  "fluid": "minecraft:water",
  "ingredients": [
    {
      "items": "ae2cs:certus_quartz_seed",
      "count": 1
    }
  ],
  "results": [
    {
      "id": "ae2cs:purified_certus_quartz_crystal",
      "count": 1
    }
  ]
})
event.custom(
        {
  "type": "anvilcraft:solid_liquid",
  "fluid": "minecraft:water",
  "ingredients": [
    {
      "items": "ae2cs:fluix_crystal_seed",
      "count": 1
    }
  ],
  "results": [
    {
      "id": "ae2cs:purified_fluix_crystal",
      "count": 1
    }
  ]
})
event.custom(
        {
  "type": "anvilcraft:solid_liquid",
  "fluid": "minecraft:water",
  "ingredients": [
    {
      "items": "ae2cs:meteor_seed",
      "count": 1
    }
  ],
  "results": [
    {
      "id": "ae2cs:purified_meteor_crystal",
      "count": 1
    }
  ]
})
event.custom(
        {
  "type": "anvilcraft:solid_liquid",
  "fluid": "minecraft:water",
  "ingredients": [
    {
      "items": "ae2cs:ender_quartz_seed",
      "count": 1
    }
  ],
  "results": [
    {
      "id": "ae2cs:purified_ender_quartz",
      "count": 1
    }
  ]
})
event.custom(
        {
  "type": "anvilcraft:solid_liquid",
  "fluid": "minecraft:water",
  "ingredients": [
    {
      "items": "ae2cs:redstone_crystal_seed",
      "count": 1
    }
  ],
  "results": [
    {
      "id": "ae2cs:purified_redstone_crystal",
      "count": 1
    }
  ]
})
event.custom(
        {
  "type": "anvilcraft:solid_liquid",
  "fluid": "minecraft:water",
  "ingredients": [
    {
      "items": "ae2cs:entro_crystal_seed",
      "count": 1
    }
  ],
  "results": [
    {
      "id": "ae2cs:purified_entro_crystal",
      "count": 1
    }
  ]
})
event.custom(
        {
  "type": "anvilcraft:solid_liquid",
  "fluid": "minecraft:water",
  "ingredients": [
    {
      "items": "ae2cs:resonating_seed",
      "count": 1
    }
  ],
  "results": [
    {
      "id": "ae2cs:purified_resonating_crystal",
      "count": 1
    }
  ]
})
})
ServerEvents.recipes(event => {
    event.replaceInput(
        { id: 'ae2cs:craft/shaped/crystal_growth_chamber' },
        'ae2:quartz_cluster',
        'apotheosis:luminous_crystal_shard'  
    )
})