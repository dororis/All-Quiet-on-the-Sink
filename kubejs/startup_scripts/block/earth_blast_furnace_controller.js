StartupEvents.registry('block', event => {
    // 土高炉控制器：灾变黑曜石砖外壳 + 控制器正面
    event.create('earth_blast_furnace_controller')
        .displayName('土高炉控制器')
        .parentModel('kubejs:block/earth_blast_furnace_controller_model')
        .texture('cataclysm:block/obsidian_bricks')
        .renderType('cutout')
        .hardness(3.5)
        .resistance(6.0)
        .tagBlock('minecraft:mineable/pickaxe')
        .requiresTool(true)
})