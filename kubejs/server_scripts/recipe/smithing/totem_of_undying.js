ServerEvents.recipes(event => {
    event.smithing(
        'minecraft:totem_of_undying',                          // 输出物品 (Result)
        'justdirethings:template_blazegold', // 锻造模板 (Template)
        'justdirethings:totem_of_death_recall',                     // 底座 (Base)
        'anvilcraft:topaz'                     // 材料 (Addition)
    )
})