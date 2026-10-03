StartupEvents.registry('item', event => {
    // 原版 16 种混凝土的颜色 ID
    const colors = [
        'white', 'orange', 'magenta', 'light_blue',
        'yellow', 'lime', 'pink', 'gray',
        'light_gray', 'cyan', 'purple', 'blue',
        'brown', 'green', 'red', 'black'
    ]

    event.create('infinities_concrete_cell', 'meinfinitycell:infinities_cell')
        .setName(Text.literal('猪咪地板'))
        .setKeys(KeyList.create().adds(keys => {
            colors.forEach(color => {
                keys.add(AEKeyHelper.item(`ae2lt:${color}_pigmee_framed_building_panel`))
            })
        }))
        .texture('extendedae:item/infinity_cell')
})