LootJS.lootTables(event => {
    event
        .getLootTable("minecraft:chests/ancient_city")
        .firstPool()
        .addEntry(
            LootEntry.of("allthemodium:allthemodium_upgrade_smithing_template")
                .withWeight(5)
        )
})
LootJS.lootTables(event => {
    event
        .getLootTable("minecraft:chests/ancient_city")
        .firstPool()
        .addEntry(
            LootEntry.of("minecraft:enchanted_book")
                .withWeight(5)
                .enchant(builder => {
                    builder.withEnchantment("minecraft:silk_touch", 1)
                })
        )
})
LootJS.lootTables(event => {
    event
        .getLootTable("minecraft:chests/ancient_city")
        .firstPool()
        .addEntry(
            LootEntry.of("minecraft:enchanted_book")
                .withWeight(10)
                .enchant(builder => {
                    builder.withEnchantment("minecraft:fortune", 5)
                })
        )
})
LootJS.lootTables(event => {
    event
        .getLootTable("minecraft:chests/ancient_city")
        .firstPool()
        .addEntry(
            LootEntry.of("mekanism:nugget_refined_obsidian")
                .withWeight(25)
                .setCount([1, 4])
        )
})
LootJS.lootTables(event => {
    event
        .getLootTable("minecraft:chests/ancient_city")
        .firstPool()
        .addEntry(
            LootEntry.of("minecraft:enchanted_book")
                .withWeight(10)
                .enchant(builder => {
                    builder.withEnchantment("anvilcraft:smelting", 5)
                })
        )
})
LootJS.lootTables(event => {
    event
        .getLootTable("minecraft:chests/ancient_city")
        .firstPool()
        .addEntry(
            LootEntry.of("minecraft:enchanted_book")
                .withWeight(5)
                .enchant(builder => {
                    builder.withEnchantment("apothic_enchanting:boon_of_the_earth", 5)
                })
        )
})