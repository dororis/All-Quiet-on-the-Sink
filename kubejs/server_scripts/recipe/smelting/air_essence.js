ServerEvents.recipes(event => {
    event.smelting(
        'mysticalagriculture:air_essence',
        'mysticalagriculture:air_agglomeratio'
    ).xp(0.1)
    .cookingTime(200)
    event.smelting(
        'mysticalagriculture:earth_essence',
        'mysticalagriculture:earth_agglomeratio'
    ).xp(0.1)
    .cookingTime(200)
})