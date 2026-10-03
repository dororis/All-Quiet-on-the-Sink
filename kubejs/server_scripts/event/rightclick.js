BlockEvents.rightClicked(event => {
    const { block, player, item, hand } = event

    // 1. 判断方块是草方块
    if (block.id !== 'minecraft:grass_block') return

    if (!player.isShiftKeyDown()) return

    // 2. 判断主手空手
    if(player.getMainHandItem().isEmpty())

    // 3. 随机掉落三个之一
    const loot = [
        'hostilenetworks:overworld_prediction',
        'hostilenetworks:nether_prediction',
        'hostilenetworks:end_prediction'
    ]
    const randomIndex = Math.floor(Math.random() * loot.length)
    const dropItem = Item.of(loot[randomIndex])

    // 4. 弹出物品（掉落物形式）
    block.popItem(dropItem)

})