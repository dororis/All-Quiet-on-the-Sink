ItemEvents.modification(event => {
    const items = [
        'oritech:overcharged_crystal',
    ]
    items.forEach(id => {
        event.modify(id, item => {
            item.maxStackSize = 64
        })
    })
})