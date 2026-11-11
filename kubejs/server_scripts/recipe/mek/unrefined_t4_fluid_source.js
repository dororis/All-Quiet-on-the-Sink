ServerEvents.recipes(event => {
    event.recipes.mekanism.chemical_infusing(
        'kubejs:unrefined_t4_fluid_source',  // 输出
        'kubejs:unrefined_t3_fluid_source',                   // 左侧输入
        'alltheores:clean_silver'                        // 右侧输入
    ).id('kubejs:chemical_infusing/unrefined_t4_fluid_source')
})