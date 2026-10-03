ServerEvents.recipes(event => {
    event.shaped(
        Item.of('hostilenetworks:sim_chamber'), 
        [                                               
            ' A ',
            'CBC',
            'DED'
        ],
        {
            A: 'minecraft:glass_pane',  
            B:'irons_spellbooks:divine_soulshard',
            C:'minecraft:ender_pearl',
            D:'minecraft:lapis_lazuli',
            E:'minecraft:comparator'                         
        }
    )
    event.shaped(
        Item.of('hostilenetworks:loot_fabricator'), 
        [                                               
            ' A ',
            'CBC',
            'DED'
        ],
        {
            A: 'minecraft:glass_pane',  
            B:'irons_spellbooks:divine_soulshard',
            C:'minecraft:diamond',
            D:'minecraft:gold_ingot',
            E:'minecraft:comparator'                         
        }
    )
})