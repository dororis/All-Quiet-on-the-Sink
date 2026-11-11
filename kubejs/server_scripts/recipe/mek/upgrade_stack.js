ServerEvents.recipes(event => {
    event.shaped(
        Item.of('mekanism_extras:upgrade_stack'), 
        [                                               
            ' A ',
            'BCB',
            ' A '
        ],
        {
            A: 'enderio_evolution:stellar_stack_upgrade',  
            B: 'enderio_evolution:stellar_batch_upgrade',
            C:'mekanism_extras:alloy_thermonuclear'                         
        }
    )
})