ServerEvents.recipes(event => {
    event.recipes.justdirethings.goospread(
        'kubejs:goospread/allthemodium_slate_ore',  // Recipe ID
        'minecraft:reinforced_deepslate',  // Input block
        'allthemodium:allthemodium_slate_ore',  // Output block
        2,  // Goo tier
        500  // Crafting duration
    )
})