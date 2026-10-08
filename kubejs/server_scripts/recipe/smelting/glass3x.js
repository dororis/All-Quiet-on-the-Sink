ServerEvents.recipes(event => {
    event.smelting(
        'allthecompressed:glass_3x',
        'allthecompressed:sand_3x'
    ).xp(0.1)
    .cookingTime(200)
    event.smelting(
        'allthecompressed:glass_2x',
        'allthecompressed:sand_2x'
    ).xp(0.1)
    .cookingTime(200)
    event.smelting(
        'allthecompressed:glass_1x',
        'allthecompressed:sand_1x'
    ).xp(0.1)
    .cookingTime(200)
    event.smelting(
        '4x extendedae:silicon_block',
        'allthecompressed:certus_quartz_block_1x'
    ).xp(0.1)
    .cookingTime(200)
})