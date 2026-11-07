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
event.custom(
        {
  "type": "anvilcraft:solid_liquid",
  "fluid": "anvilcraft:exp_fluid",
  "ingredients": [
    {
      "items": "minecraft:budding_amethyst",
      "count": 1
    }
  ],
  "results": [
    {
      "id": "minecraft:budding_amethyst",
      "count": 1
    },
    {
      "id": "minecraft:amethyst_shard",
      "count": 1
    }
  ]
})
event.custom(
        {
  "type": "anvilcraft:solid_liquid",
  "consume": 1000,
  "fluid": "anvilcraft:exp_fluid",
  "ingredients": [
    {
      "items": "anvilcraft:amulet_box",
      "count": 1
    }
  ],
  "results": [
    {
      "id": "apotheosis:potion_charm",
      "count": 1,
      "components": {
      "potion_contents": "apothic_attributes:strong_knowledge"
    },
    },
    {
      "id": "anvilcraft:amulet_box",
      "count": 1,
    }
  ]
})
event.custom(
        {
  "type": "anvilcraft:solid_liquid",
  "consume": 1000,
  "fluid": "anvilcraft:exp_fluid",
  "ingredients": [
    {
      "items": "ae2lt:pigmee_mentalmath_unit",
      "count": 1
    }
  ],
  "results": [
    {
      "id": "ae2:4k_crafting_storage",
      "count": 1
    }
  ]
})
event.custom(
        {
  "type": "anvilcraft:solid_liquid",
  "consume": 1000,
  "fluid": "justdirethings:polymorphic_fluid_source",
  "ingredients": [
    {
      "items": "ae2lt:pigmee_mentalmath_unit",
      "count": 1
    }
  ],
  "results": [
    {
      "id": "extendedae_plus:4x_crafting_accelerator",
      "count": 1
    }
  ]
})
event.custom(
        {
  "type": "anvilcraft:solid_liquid",
  "consume": 1000,
  "fluid": "minecraft:water",
  "ingredients": [
    {
      "items": "neoecoae:cryotheum_crystal",
      "count": 1
    },
    {
      "items":"anvilcraft:frost_metal_ingot",
      "count":1
    }
  ],
  "results": [],
  "transform": {
    "amount": 1000,
    "id": "neoecoae:cryotheum_solution"
  }
})
event.custom(
        {
  "type": "anvilcraft:solid_liquid",
  "consume": 1000,
  "fluid": "minecraft:water",
  "ingredients": [
    {
      "items": "rftoolsbase:dimensionalshard",
      "count": 1
    }
  ],
  "results": [],
  "transform": {
    "amount": 1000,
    "id": "justdirethings:polymorphic_fluid_source"
  }
})
})
ServerEvents.recipes(event => {
    event.replaceInput(
        { id: 'ae2cs:craft/shaped/crystal_growth_chamber' },
        'ae2:quartz_cluster',
        'apotheosis:luminous_crystal_shard'  
    )
})