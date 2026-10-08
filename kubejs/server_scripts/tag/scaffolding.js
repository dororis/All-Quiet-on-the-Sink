ServerEvents.recipes(event => {
    event.replaceInput(
        { id: 'minecraft:scaffolding' },
        'minecraft:bamboo',
        'minecraft:stick'   // ← 直接写字符串
    )
})