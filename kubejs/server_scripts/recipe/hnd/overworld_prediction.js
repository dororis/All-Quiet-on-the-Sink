ServerEvents.recipes(event => {
    // 陈旧布匹 -> 3个绿色染料 (熔炉烧制)
    event.recipes.minecraft.smelting(
        '3x hostilenetworks:overworld_prediction',          // 输出：3个绿色染料
        'apotheosis:timeworn_fabric'       // 输入：陈旧布匹
    )
})