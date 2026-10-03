ServerEvents.recipes(event => {
    // 切石机配方：1个骨块 -> 4个骨头
    event.recipes.minecraft.stonecutting(
        '3x minecraft:bone',       // 输出：4个骨头 (原版1个骨块能分解成9个骨头，设置为4个是为了符合切石机1:4的常规比例)
        'minecraft:bone_block'     // 输入：1个骨块
    )
})