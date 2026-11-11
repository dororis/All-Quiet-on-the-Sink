ServerEvents.recipes(event => {
    
    event.shapeless(
        Item.of('minecraft:nether_wart', 9), 
        [
            'minecraft:nether_wart_block'
        ]
    )
    event.shapeless(
        Item.of('minecraft:nether_wart'), 
        [
            'hostilenetworks:nether_prediction',
            'minecraft:wheat_seeds'
        ]
    )
    event.shapeless(
        Item.of('minecraft:amethyst_shard',4),
        [
            'minecraft:amethyst_block'
        ]
    )
})