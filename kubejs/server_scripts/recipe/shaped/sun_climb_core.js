ServerEvents.recipes(event => {
  event.shaped(
    'kubejs:sun_climb_core', // 输出物品
    [
      'ABA', 
      'BCB', 
      'DDD'
    ],
    {
      A: 'minecraft:gold_ingot',        // 金锭
      B: 'minecraft:amethyst_shard',    // 紫水晶碎片
      C: 'minecraft:ender_eye',         // 末影之眼
      D: 'apotheosis:gem_dust'          // 神化模组的宝石粉 (底下一排)
    }
  )
})