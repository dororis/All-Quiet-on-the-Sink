ServerEvents.recipes(event => {
    event.shaped(
        Item.of('allthemodium:allthemodium_pickaxe'), 
        [                                               
            'AAA',
            ' B ',
            ' B '
        ],
        {  
            B: 'allthemodium:allthemodium_rod',          
            A: 'allthemodium:allthemodium_ingot'                
        }
    )
})