ServerEvents.recipes(event => {
    event.shaped(
        Item.of('mekanismsun:artificial_sun_casing'), 
        [                                               
            'BDB',
            'DAD',
            'BDB'
        ],
        {
            A: 'mekanism_extras:infinite_tier_installer',  
            B: 'dysoncubeproject:compressed_sail[dysoncubeproject_addon:compression_level="5"]',
            D:'dysoncubeproject:compressed_beam[dysoncubeproject_addon:compression_level="5"]'                       
        }
    )
})