StartupEvents.registry('item', event => {
    // 加载 Soulplied Energistics 的 SoulKey 类
    const $SoulKey = Java.loadClass('com.buuz135.soulplied_energistics.applied.SoulKey')

    event.create('infinity_soul_cell', 'meinfinitycell:infinity_cell')
        .type(() => $SoulKey.INSTANCE)   // 绑定灵魂 Key
        .texture('extendedae:item/infinity_cell')
})