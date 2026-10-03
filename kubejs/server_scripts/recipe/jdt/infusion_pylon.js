ServerEvents.recipes(event => {
    event.recipes.justdirethings.goospread(
        'kubejs:goospread/infusion_pylon',  // Recipe ID
        'minecraft:quartz_pillar',  // Input block
        'pylons:infusion_pylon',  // Output block
        2,  // Goo tier
        500  // Crafting duration
    )
})