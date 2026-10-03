// 启动事件：注册物品
StartupEvents.registry('item', event => {
  event.create('overworld_nether_core')
    .displayName('主世界夜境核心')   // 设置物品名称
    .glow(true)                          // 添加附魔光效
    .maxStackSize(1)
    .maxDamage(256)                    
    .rarity('epic')                      // 设置稀有度为史诗
})