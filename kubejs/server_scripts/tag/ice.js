ServerEvents.recipes(event => {
    event.replaceInput(
        { input: 'mysticalagriculture:ice_essence'},
        'mysticalagriculture:ice_essence',
        Ingredient.of(['ad_astra:ice_shard'])
    )
})