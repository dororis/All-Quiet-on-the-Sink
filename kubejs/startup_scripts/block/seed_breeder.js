StartupEvents.registry('block', event => {
    event.create('seed_breeder')
        .displayName('种子培育器')
        .parentModel('kubejs:block/seed_breeder')
        .hardness(2.5)
        .resistance(6.0)
        .tagBlock('minecraft:mineable/pickaxe')
        .requiresTool(true)
})
