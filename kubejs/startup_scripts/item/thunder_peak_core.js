StartupEvents.registry('item', event => {
  event.create('thunder_peak_core')
    .displayName('雷霆高峰核心')
    .glow(true)          // 发光效果
    .maxStackSize(1)     // 不可堆叠
    .rarity('epic')      // 史诗稀有度（紫色字体）
    .maxDamage(64)
})