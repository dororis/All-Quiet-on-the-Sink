ServerEvents.recipes(event => {
    event.shaped(
        Item.of('mbd2:moon_mineral_extractor'), 
        [                                               
            'AAA',
            'ABA',
            'DCD'
        ],
        {
            A: 'oritech:prometheum_ingot',  
            B: 'mekanism:meka_tool[enchantments={levels:{"ae2cs:ender_link":1}}]', 
            C: 'anvilcraft:magnet_block',
            D:'ad_astra:desh_ingot'                       
        }
    )
})