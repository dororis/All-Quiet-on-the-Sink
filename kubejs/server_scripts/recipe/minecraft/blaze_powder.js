ServerEvents.recipes(event => {
    
    event.shapeless(
        Item.of('minecraft:blaze_powder', 4), 
        [
            '#alltheores:ore_hammers',
            'minecraft:blaze_rod',        
        ]
    )
})