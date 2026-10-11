ServerEvents.recipes(event => {
    event.replaceInput(
        { input: 'mysticalagriculture:cow_essence'},
        'mysticalagriculture:cow_essence',
        Ingredient.of(['hostilenetworks:overworld_prediction'])
    )
    event.replaceInput(
        { input: 'mysticalagriculture:pig_essence'},
        'mysticalagriculture:pig_essence',
        Ingredient.of(['hostilenetworks:nether_prediction'])
    )
    event.replaceInput(
        { input: 'mysticalagriculture:chicken_essence'},
        'mysticalagriculture:chicken_essence',
        Ingredient.of(['hostilenetworks:end_prediction'])
    )
})