ServerEvents.recipes(event => {
    event.shaped(
        Item.of('hostilenetworks:data_model'), 
        [                                               
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'minecraft:clay_ball',  
            B: 'minecraft:repeater',
            C:'minecraft:redstone',
            D:'cataclysm:void_core',
            E:'minecraft:gold_ingot'                       
        }
    )
})