ServerEvents.recipes(event => {

    event.remove({ id: 'explorerscompass:explorers_compass' })

    event.shaped(
        Item.of('explorerscompass:explorerscompass'), 
        [                                               
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'justdirethings:ferricore_ingot',  
            B: 'justdirethings:coal_t1',          
            C: 'minecraft:compass'                
        }
    )
})