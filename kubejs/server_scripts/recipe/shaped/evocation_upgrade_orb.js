ServerEvents.recipes(event => {
    event.shaped(
        Item.of('irons_spellbooks:evocation_upgrade_orb'), 
        [                                               
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:emerald',  
            B: 'irons_spellbooks:upgrade_orb',                         
        }
    )
})