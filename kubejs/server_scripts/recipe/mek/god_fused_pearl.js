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
        'anvilcraft:ember_metal_ingot',                 
        'ad_astra:calorite_ingot',         
        'mekanismsun:helium',                 
        false                                          
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
})