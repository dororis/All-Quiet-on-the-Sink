ServerEvents.recipes(event => {
    event.replaceInput(
        { input: 'minecraft:short_grass'},
        'minecraft:short_grass',
        Ingredient.of(['minecraft:grass_block'])
    )
})