ServerEvents.recipes(event => {
    event.shaped(
        Item.of('8x anvilcraft:cinerite'), 
        [                                               
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:andesite',  
            B: 'hostilenetworks:overworld_prediction',                         
        }
    )
})
ServerEvents.recipes(event => {
    event.shaped(
        Item.of('8x anvilcraft:nether_dust'), 
        [                                               
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:netherrack',  
            B: 'hostilenetworks:nether_prediction',                         
        }
    )
})
ServerEvents.recipes(event => {
    event.custom(
        {
  "type": "anvilcraft:mesh",
  "ingredients": [
    {
      "items": "anvilcraft:cinerite"
    }
  ],
  "results": [
    {
      "count": {
        "type": "minecraft:binomial",
        "n": 1.0,
        "p": 0.5
      },
      "id": "mysticalagriculture:stone_essence"
    },
    {
      "count": {
        "type": "minecraft:binomial",
        "n": 1.0,
        "p": 0.4
      },
      "id": "minecraft:lapis_lazuli"
    },
    {
      "count": {
        "type": "minecraft:binomial",
        "n": 1.0,
        "p": 0.4
      },
      "id": "minecraft:gunpowder"
    },
    {
      "count": {
        "type": "minecraft:binomial",
        "n": 1.0,
        "p": 0.4
      },
      "id": "alltheores:peridot_dust"
    },
    {
      "count": {
        "type": "minecraft:binomial",
        "n": 1.0,
        "p": 0.3
      },
      "id": "alltheores:silver_nugget"
    },
    {
      "count": {
        "type": "minecraft:binomial",
        "n": 1.0,
        "p": 0.3
      },
      "id": "alltheores:tin_nugget"
    },
    {
      "count": {
        "type": "minecraft:binomial",
        "n": 1.0,
        "p": 0.1
      },
      "id": "allthemodium:allthemodium_nugget"
    }
  ]
}
)})