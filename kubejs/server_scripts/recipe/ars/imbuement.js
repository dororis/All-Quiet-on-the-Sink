ServerEvents.recipes(event => {
    event.recipes.ars_nouveau.imbuement(
        'ars_nouveau:source_gem', // input item
        'ars_arcane_matrix:enchanted_crystal', // output
        20000, // source cost
        [
            'apotheosis:god_fused_pearl',
            'irons_spellbooks:divine_soulshard',
            'cataclysm:abyssal_sacrifice'
        ]
    )
    event.recipes.ars_nouveau.imbuement(
        'ars_arcane_matrix:enchanted_crystal', // input item
        'ars_arcane_matrix:casting_crystal', // output
        40000, // source cost
        [
            'enderio_evolution:stellar_alloy_ingot',
            'irons_spellbooks:pyrium_ingot',
            'oritech:prometheum_ingot'
        ]
    )
    event.recipes.ars_nouveau.imbuement(
        'ars_arcane_matrix:casting_crystal', // input item
        'ars_arcane_matrix:enriched_mineral_crystal', // output
        80000, // source cost
        [
            'allthemodium:vibranium_allthemodium_alloy_block',
            'allthemodium:unobtainium_vibranium_alloy_block',
            'allthemodium:unobtainium_allthemodium_alloy_block'
        ]
    )
    event.recipes.ars_nouveau.imbuement(
        'minecraft:tripwire_hook', // input item
        'minecraft:trial_key', // output
        10000, // source cost
        [
            'minecraft:heavy_core',
            'minecraft:wind_charge',
            'minecraft:breeze_rod'
        ]
    )
})
