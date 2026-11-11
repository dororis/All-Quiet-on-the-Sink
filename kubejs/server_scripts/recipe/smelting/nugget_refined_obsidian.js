ServerEvents.recipes(event => {
    event.smelting(
        'mekanism:nugget_refined_obsidian',
        'minecraft:obsidian'
    ).xp(0.1)
    .cookingTime(200)
    
    event.smelting(
        'enderio:soularium_nugget',
        'minecraft:soul_sand'
    ).xp(0.1)
    .cookingTime(200)
})