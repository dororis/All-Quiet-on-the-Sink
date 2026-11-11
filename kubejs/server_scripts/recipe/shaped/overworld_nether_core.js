ServerEvents.recipes(event => {
  // 3x3 有序配方 (对应你提供的图片)
  event.shaped(
    'kubejs:overworld_nether_core', // 输出物品
    [
      'ABA',
      'CDC',
      'EFE'
    ],
    {
      A: 'minecraft:gold_nugget',      // 金粒
      B: 'minecraft:redstone',         // 红石
      C: 'minecraft:gunpowder',        // 火药
      D: 'minecraft:ender_eye',        // 末影之眼
      E: 'minecraft:bone',             // 骨头
      F: 'minecraft:rotten_flesh'      // 腐肉
    }
  )
})