ServerEvents.recipes(event => {
  // .energizing([inputs, ...], output, energy)
  event.recipes.powah.energizing(['allthecompressed:iron_block_1x'], 'anvilcraft:magnet_block', 1000000)
})