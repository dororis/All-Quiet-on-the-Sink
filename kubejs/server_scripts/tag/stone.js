ServerEvents.recipes(event => {
    event.replaceOutput(
        { id: 'mysticalagriculture:essence/minecraft/cobblestone' },
        'minecraft:cobblestone',
        'minecraft:andesite'   // ← 直接写字符串
    )
})