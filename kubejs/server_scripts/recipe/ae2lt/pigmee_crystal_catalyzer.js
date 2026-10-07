ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('ae2lt:pigmee_crystal_catalyzer'), 
        [                                               
            'ae2lt:pigmee_fumo',
            'minecraft:golden_carrot',
            'irons_spellbooks:copper_spell_book[irons_spellbooks:spell_container={data:[],maxSpells:5,mustEquip:1b,spellWheel:1b}]'
        ]
    )
})