// 放在 kubejs/server_scripts/ 下
ServerEvents.recipes(event => {
    event.recipes.mekanism.metallurgic_infusing(
        'apotheosis:god_fused_pearl',                 
        'apotheosis:godforged_pearl',         
        '20x kubejs:unrefined_t2_fluid_source',                                                           
    )
    event.recipes.mekanism.metallurgic_infusing(
        'irons_spellbooks:bloody_vellum',                 
        'apotheosis:timeworn_fabric',         
        '20x kubejs:blood',                                                           
    )
    event.recipes.mekanism.metallurgic_infusing(
        '4x minecraft:echo_shard',                 
        '4x apotheosis:luminous_crystal_shard',         
        'kubejs:unrefined_t4_fluid_source',   
        false                                                        
    )
    event.recipes.mekanism.metallurgic_infusing(                 
        'industrialforegoing:pink_slime',
        'minecraft:slime_ball',         
        '90x mekanism:pink'                                                         
    )
    event.recipes.mekanism.metallurgic_infusing(                 
        'industrialforegoing:pink_slime_block',
        'minecraft:slime_block',         
        '900x mekanism:pink'                                                         
    )
    event.recipes.mekanism.metallurgic_infusing(                 
        'allthemodium:ancient_soulberries',
        'minecraft:glow_berries',         
        '20x kubejs:soul_lava'                                                         
    )
    event.recipes.mekanism.metallurgic_infusing(                 
        'appgen:ember_crystal',
        'powah:crystal_nitro',         
        '20x kubejs:unrefined_t2_fluid_source'                                                         
    )
    event.recipes.mekanism.metallurgic_infusing(                 
        '9x appgen:ember_block',
        '4x powah:nitro_crystal_block',         
        '720x kubejs:unrefined_t2_fluid_source'                                                         
    )
    event.recipes.mekanism.metallurgic_infusing(                 
        '9x appgen:ember_block',
        '4x powah:nitro_crystal_block',         
        '720x kubejs:unrefined_t2_fluid_source'                                                         
    )
    event.recipes.mekanism.metallurgic_infusing(                 
        'apothic_enchanting:infused_breath',
        'minecraft:dragon_breath',         
        '200x mekanism_extras:fluorinated_naquadah_uranium_fuel'                                                         
    )
})