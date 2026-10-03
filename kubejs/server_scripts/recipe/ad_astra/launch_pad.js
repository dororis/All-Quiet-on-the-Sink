ServerEvents.recipes(event => {
    event.shaped(
        Item.of('ad_astra:launch_pad'), 
        [                                               
            'BAB',
            'ABA',
            'BAB'
        ],
        {
            A: 'mekanism:hdpe_stick',  
            B: 'oritech:prometheum_ingot',                         
        }
    )
})