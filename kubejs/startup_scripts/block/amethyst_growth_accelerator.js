StartupEvents.registry('block', event => {
    event.create('amethyst_growth_accelerator')
        .displayName('紫水晶催生器')
        .parentModel('kubejs:block/amethyst_growth_accelerator')
        .hardness(2.5)
        .resistance(6.0)
        .tagBlock('minecraft:mineable/pickaxe')
        .requiresTool(true)
})
