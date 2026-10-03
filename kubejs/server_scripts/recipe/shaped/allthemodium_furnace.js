ServerEvents.recipes(event => {
    event.shaped(
        Item.of('ironfurnaces:allthemodium_furnace'), 
        [                                               
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'allthemodium:allthemodium_ingot',  
            B: 'ironfurnaces:million_furnace',                         
        }
    )
    event.shaped(
        Item.of('ironfurnaces:vibranium_furnace'), 
        [                                               
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'allthemodium:vibranium_ingot',  
            B: 'ironfurnaces:allthemodium_furnace',                         
        }
    )
    event.shaped(
        Item.of('ironfurnaces:unobtainium_furnace'), 
        [                                               
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'allthemodium:unobtainium_ingot',  
            B: 'ironfurnaces:vibranium_furnace',                         
        }
    )
})