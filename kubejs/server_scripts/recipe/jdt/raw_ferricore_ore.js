ServerEvents.recipes(event => {
    event.recipes.justdirethings.goospread(
        'kubejs:goospread/raw_ferricore_ore',  // Recipe ID
        'minecraft:iron_block',  // Input block
        'justdirethings:raw_ferricore_ore',  // Output block
        1,  // Goo tier
        160  // Crafting duration
    ),
    event.recipes.justdirethings.goospread(
        'kubejs:goospread/raw_blazegold_ore',  // Recipe ID
        'minecraft:gold_block',  // Input block
        'justdirethings:raw_blazegold_ore',  // Output block
        2,  // Goo tier
        160  // Crafting duration
    )
    event.recipes.justdirethings.goospread(
        'kubejs:goospread/raw_blazegold_ore',  // Recipe ID
        'minecraft:coal_block',  // Input block
        'justdirethings:raw_coal_t1_ore',  // Output block
        1,  // Goo tier
        160  // Crafting duration
    )
})