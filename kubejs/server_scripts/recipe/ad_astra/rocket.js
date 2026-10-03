ServerEvents.recipes(event => {
    event.shaped(
        Item.of('ad_astra:rocket_nose_cone'), 
        [                                               
            ' A ',
            ' B ',
            'BBB'
        ],
        {
            A: 'minecraft:lightning_rod',  
            B: 'oritech:prometheum_ingot',                         
        }
    )
    event.shaped(
        Item.of('ad_astra:steel_tank'), 
        [                                               
            'BB ',
            'BCA',
            'BB '
        ],
        {
            A: 'mekanism:hdpe_stick',  
            B: 'oritech:prometheum_ingot', 
            C:'ad_astra:gas_tank'                        
        }
    )
    event.shaped(
        Item.of('ad_astra:steel_engine'), 
        [                                               
            'BBB',
            'BCB',
            ' D '
        ],
        {  
            B: 'oritech:prometheum_ingot', 
            C:'ad_astra:engine_frame',
            D:'ad_astra:fan'                        
        }
    )
    event.shaped(
        Item.of('4x ad_astra:rocket_fin'), 
        [                                               
            ' B ',
            'BBB',
            'B B'
        ],
        {            
            B: 'oritech:prometheum_ingot'                        
        }
    )
})
ServerEvents.recipes(event => {
    event.custom(
        {
  "type": "ad_astra:nasa_workbench",
  "ingredients": [
    {
      "item": "ad_astra:rocket_nose_cone"
    },
    {
      "tag": "anvilcraft:ember_metal_block"
    },
    {
      "tag": "anvilcraft:ember_metal_block"
    },
    {
      "tag": "anvilcraft:ember_metal_block"
    },
    {
      "tag": "anvilcraft:ember_metal_block"
    },
    {
      "tag": "anvilcraft:ember_metal_block"
    },
    {
      "item": "anvilcraft:ember_metal_block"
    },
    {
      "item": "ad_astra:rocket_fin"
    },
    {
      "item": "ad_astra:calorite_tank"
    },
    {
      "item": "ad_astra:calorite_tank"
    },
    {
      "item": "ad_astra:rocket_fin"
    },
    {
      "item": "ad_astra:rocket_fin"
    },
    {
      "item": "ad_astra:calorite_engine"
    },
    {
      "item": "ad_astra:rocket_fin"
    }
  ],
  "result": {
    "count": 1,
    "id": "ad_astra:tier_4_rocket"
  }
}
)})