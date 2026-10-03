ServerEvents.recipes(event => {

    // ==========================================
    // 配方1：锁链 + 神秘废金属 → 刷怪笼锁链
    // ==========================================
    event.shaped('apotheosis:spawner_chain', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'minecraft:chain',
        B: 'apotheosis:mysterious_scrap_metal'
    })

    // ==========================================
    // 配方2：刷怪笼锁链 + 发光水晶碎片 → 刷怪笼
    // ==========================================
    event.shaped('minecraft:spawner', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'apotheosis:spawner_chain',
        B: 'apotheosis:luminous_crystal_shard'
    })

})