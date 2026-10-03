ServerEvents.recipes(event => {
    event.shaped(
        Item.of('kubejs:infinity_soul_cell'), 
        [                                               
            'ABA',
            'ADA',
            'ACA'
        ],
        {
            A: 'industrialforegoing:laser_drill',  
            B: 'appliedsoul:soul_collector',
            C:'minecraft:warden_spawn_egg',
            D:'industrialforegoingsouls:soul_laser_base',                      
        }
    )
})