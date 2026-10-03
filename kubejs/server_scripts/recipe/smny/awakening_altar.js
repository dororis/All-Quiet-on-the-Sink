ServerEvents.recipes(event => {
    event.shaped(
        Item.of('mysticalagriculture:awakening_altar'), 
        [                                               
            'ACA',
            ' B ',
            'BBB'
        ],
        {
            A: 'ad_astra:desh_ingot',  
            B: 'mysticalagriculture:soulstone',          
            C: 'minecraft:orange_wool'                
        }
    )
})