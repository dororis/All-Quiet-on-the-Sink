ServerEvents.recipes(event => {

    event.shaped(
        Item.of('minecraft:phantom_membrane', 1),
        [
            'ABA',
            'B B',
            'ABA'
        ],
        {
            A: 'irons_spellbooks:arcane_essence',
            B: 'minecraft:leather'
        }
    )
})