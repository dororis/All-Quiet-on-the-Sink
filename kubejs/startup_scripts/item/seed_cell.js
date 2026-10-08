StartupEvents.registry('item', event => {
    const attributes = ['water', 'fire', 'dirt']

    event.create('infinities_WFD_cell', 'meinfinitycell:infinities_cell')
        .setName(Text.literal('水火土种子'))
        .setKeys(KeyList.create().adds(keys => {
            attributes.forEach(attr => {
                keys.add(AEKeyHelper.item(`mysticalagriculture:${attr}_seeds`))
            })
        }))
        .texture('extendedae:item/infinity_cell')
})