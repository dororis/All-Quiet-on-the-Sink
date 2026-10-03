ServerEvents.recipes(event => {
  event.shaped(
    'kubejs:thunder_peak_core', // 输出物品
    [
      'ABA', 
      'CDC', 
      'EEE'
    ],
    {
      A: 'minecraft:blaze_powder',          // 烈焰粉（左上、右上）
      B: 'minecraft:diamond',               // 钻石（中上，替换了恶魂之泪）
      C: 'apotheosis:arcane_sands',         // 玄奥沙（左中、右中，来自神化模组）
      D: 'minecraft:ender_eye',             // 末影之眼（正中心）
      E: 'apotheosis:gem_dust'              // 宝石粉（底下一排，来自神化模组）
    }
  )
})