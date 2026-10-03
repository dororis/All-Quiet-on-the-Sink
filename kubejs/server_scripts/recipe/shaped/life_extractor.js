ServerEvents.recipes(event => {
    event.shaped(
        Item.of('mbd2:life_extractor'), 
        [                                               
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'irons_spellbooks:bloody_vellum',  
            B: 'jdte:extended_bio_crusher',                         
        }
    )
})