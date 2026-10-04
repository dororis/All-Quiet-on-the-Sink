ItemEvents.modification(event => {
    event.modify('minecraft:ender_pearl', item => {
        // 直接赋值，不要写成 item.maxStackSize(64)
        item.maxStackSize = 64
    })
})
ItemEvents.modification(event => {
    event.modify('minecraft:totem_of_undying', item => {
        // 直接赋值，不要写成 item.maxStackSize(64)
        item.maxStackSize = 64
    })
})
ItemEvents.modification(event => {
    event.modify('cataclysm:void_core', item => {
        // 直接赋值，不要写成 item.maxStackSize(64)
        item.maxStackSize = 64
    })
})
ItemEvents.modification(event => {
    event.modify('hostilenetworks:data_model', item => {
        // 直接赋值，不要写成 item.maxStackSize(64)
        item.maxStackSize = 64
    })
})
ItemEvents.modification(event => {
    event.modify('oritech:overcharged_crystal', item => {
        // 直接赋值，不要写成 item.maxStackSize(64)
        item.maxStackSize = 64
    })
})
ItemEvents.modification(event => {
    event.modify('powah:charged_snowball', item => {
        // 直接赋值，不要写成 item.maxStackSize(64)
        item.maxStackSize = 64
    })
})