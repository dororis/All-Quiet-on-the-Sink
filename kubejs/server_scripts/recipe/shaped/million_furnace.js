ServerEvents.recipes(event => {
    event.shaped(
        Item.of('ironfurnaces:million_furnace'), 
        [                                               
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'irons_spellbooks:arcane_ingot',  
            B: 'minecraft:furnace',                         
        }
    )
})