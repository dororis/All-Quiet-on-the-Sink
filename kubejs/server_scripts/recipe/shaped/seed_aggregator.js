ServerEvents.recipes(event => {
    event.shaped(
        Item.of('mbd2:seed_aggregator'), 
        [                                               
            'ABA',
            'BAB',
            'ABA'
        ],
        {
            A: 'ae2cs:crystal_aggregator',  
            B: 'apotheosis:god_fused_pearl'                       
        }
    )
})