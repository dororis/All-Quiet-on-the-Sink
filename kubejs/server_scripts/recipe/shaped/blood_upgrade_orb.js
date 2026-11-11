ServerEvents.recipes(event => {
    event.shaped(
        Item.of('irons_spellbooks:blood_upgrade_orb'), 
        [                                               
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'irons_spellbooks:bloody_vellum',  
            B: 'irons_spellbooks:upgrade_orb',                         
        }
    )
})