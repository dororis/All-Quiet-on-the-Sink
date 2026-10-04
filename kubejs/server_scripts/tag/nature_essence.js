ServerEvents.recipes(event => {
    event.replaceInput(
        { input: 'mysticalagriculture:nature_essence'},
        'mysticalagriculture:nature_essence',
        Ingredient.of(['apotheosis:timeworn_fabric','mysticalagriculture:nature_essence'])
    )
})