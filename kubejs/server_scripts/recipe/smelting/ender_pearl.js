ServerEvents.recipes(event => {
    event.smelting(
        'minecraft:ender_pearl',
        'ae2:ender_dust'
    ).xp(0.1)
    .cookingTime(200)
})