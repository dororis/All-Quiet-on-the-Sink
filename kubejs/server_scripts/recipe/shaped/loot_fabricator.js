ServerEvents.recipes(event => {
    event.shaped(
        Item.of('jdte:loot_fabricator'), 
        [                                               
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            A: 'jdte:capacity_upgrade',  
            B: 'jdte:looting_upgrade',          
            C: 'jdte:extended_block_placer',
            D:'minecraft:nether_star',
            E:'mbd2:life_extractor',
            F:'jdte:advanced_time_accelerator'               
        }
    )
})