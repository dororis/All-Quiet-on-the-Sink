ServerEvents.recipes(event => {
    // 1. 无序合成：小麦 -> 面粉 (AE2)
    event.shapeless(
        'ae2cs:flour',          // 输出：面粉
        ['minecraft:wheat']     // 输入：小麦
    )

    // 2. 无序合成：黄绿色染料 + 面粉 -> 黏液球
    event.shapeless(
        'minecraft:slime_ball', // 输出：黏液球
        [
            'minecraft:lime_dye', // 输入1：黄绿色染料
            'ae2cs:flour'         // 输入2：面粉
        ]
    )
})