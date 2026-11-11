BlockEvents.rightClicked('ae2lt:pigmee_fumo', event => {
    if (event.hand == "OFF_HAND") return;
    const player = event.player;
    if (!player) return;

    const mainHandItem = player.getMainHandItem();
    if (mainHandItem.getId() === 'irons_spellbooks:divine_soulshard') {
        // 取方块位置，居中生成（+0.5 让实体在方块正中央）
        const block = event.block;
        const moyingg = event.level.createEntity('allthemodium:piglich');
        moyingg.setPosition(
            block.x + 0.5,
            block.y + 1,    // 方块上方一格，避免卡在方块里
            block.z + 0.5
        );
        moyingg.spawn();

        // 非创造模式才消耗物品
        if (!player.isCreative()) {
            mainHandItem.shrink(1);
            player.setMainHandItem(mainHandItem);
        }
    }
})