ServerEvents.recipes(event => {
    event.smelting(
        'minecraft:red_dye',
        'alltheores:lead_nugget'
    ).xp(0.1)
    .cookingTime(200)
})