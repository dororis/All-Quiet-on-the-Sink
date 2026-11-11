ServerEvents.recipes(event => {
    event.shaped(
        Item.of('irons_spellbooks:nature_upgrade_orb'), 
        [                                               
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'apotheosis:timeworn_fabric',  
            B: 'irons_spellbooks:upgrade_orb',                         
        }
    )
})