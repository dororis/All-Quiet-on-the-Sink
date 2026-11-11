ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('fluxnetworks:flux_dust'), 
        [                                               
            'apotheosis:arcane_sands',
            'minecraft:redstone',
            'mekanism:dust_obsidian'
        ]
    )
})