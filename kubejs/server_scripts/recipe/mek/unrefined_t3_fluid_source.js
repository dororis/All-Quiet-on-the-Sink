ServerEvents.recipes(event => {
    event.recipes.mekanism.chemical_infusing(
        'kubejs:unrefined_t3_fluid_source',  // 输出
        'kubejs:soul_lava',                   // 左侧输入
        'kubejs:blood'                        // 右侧输入
    ).id('kubejs:chemical_infusing/unrefined_t3_fluid_source')
})