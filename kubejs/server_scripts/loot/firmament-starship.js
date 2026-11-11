LootJS.lootTables(event => {
    event
        .getLootTable("ae2lt:chests/firmament_starship")
        .firstPool()
        .addEntry(
            LootEntry.of("ae2lt:flawless_budding_overload_crystal")
                .withWeight(25)
                
        )
})