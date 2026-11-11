ServerEvents.recipes(event => {
    event.shaped(
        Item.of('mbd2:compact_amethyst_growth'), 
        [                                               
            'ABA',
            'BAB',
            'ABA'
        ],
        {
            A: 'ae2cs:crystal_growth_chamber',  
            B: 'apotheosis:god_fused_pearl'                       
        }
    )
})