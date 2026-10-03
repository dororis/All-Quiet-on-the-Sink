ServerEvents.recipes(event => {
    event.shaped(
        Item.of('anvilcraft:cursed_gold_ingot'), 
        [                                               
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            A: 'irons_spellbooks:eldritch_manuscript',  
            B: 'alltheores:electrum_ingot',
            C:'irons_spellbooks:pyrium_ingot',
            D:'minecraft:gold_ingot',
            E:'enderio:soularium_ingot',
            F:'allthemodium:vibranium_ingot'                       
        }
    )
    event.shaped(
        Item.of('anvilcraft:enchanted_gold_ingot'), 
        [                                               
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            A:'irons_spellbooks:evoker_spell_book',  
            B: 'alltheores:electrum_ingot',
            C:'irons_spellbooks:pyrium_ingot',
            D:'minecraft:gold_ingot',
            E:'enderio:soularium_ingot',
            F:'allthemodium:vibranium_ingot'                       
        }
    )
})