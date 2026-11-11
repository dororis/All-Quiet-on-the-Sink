ServerEvents.recipes(event => {
    event.replaceInput(
        { input: 'minecraft:string'},
        'minecraft:string',
        Ingredient.of(['apotheosis:timeworn_fabric','minecraft:string'])
    )
})