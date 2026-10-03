StartupEvents.registry('item', event => {
  event.create('sun_climb_core')
    .displayName('日耀攀升核心')
    .maxDamage(128) // 设置耐久度
    .glow(true)     // 加上附魔光效，显得更高级
    .rarity('epic')
    .maxStackSize(1)
    // 如果没有专属贴图，会显示紫黑块。如果你想默认有图标，可以删掉下面这行，但你需要放一张16x16的png在 assets/kubejs/textures/item/sun_climb_core.png
})