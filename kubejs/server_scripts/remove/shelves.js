ServerEvents.recipes(event => {
    // 移除所有产出 #apothic_enchanting:infused_shelves 标签物品的配方
    event.remove({ output: '#apothic_enchanting:infused_shelves' })
})