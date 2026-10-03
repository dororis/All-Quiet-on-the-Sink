// 放在 kubejs/server_scripts/ 下
ServerEvents.recipes(event => {
    event.recipes.mekanism.metallurgic_infusing(
        'apotheosis:god_fused_pearl',                 
        'apotheosis:godforged_pearl',         
        'kubejs:unrefined_t2_fluid_source',                 
        false                                          
    )
    event.recipes.mekanism.metallurgic_infusing(
        'irons_spellbooks:bloody_vellum',                 
        'apotheosis:timeworn_fabric',         
        'kubejs:blood',                 
        false                                          
    )
    event.recipes.mekanism.metallurgic_infusing(
        'anvilcraft:ember_metal_ingot',                 
        'ad_astra:calorite_ingot',         
        'mekanismsun:helium',                 
        false                                          
    )
})