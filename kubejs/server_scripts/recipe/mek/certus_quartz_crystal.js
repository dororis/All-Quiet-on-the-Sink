ServerEvents.recipes(event => {
    event.recipes.mekanismEnriching(
        'ae2cs:purified_certus_quartz_crystal',           
        'apotheosis:luminous_crystal_shard'       
    )
    event.recipes.mekanismEnriching(
        'alltheores:osmium_ingot',           
        'apotheosis:mysterious_scrap_metal'       
    )
    event.recipes.mekanismEnriching(
        'ae2:fluix_dust',           
        'apotheosis:arcane_sands'       
    )
})
ServerEvents.recipes(event => {    
    event.recipes.mekanism.combining(
        'ae2cs:purified_meteor_crystal', 
        'apotheosis:luminous_crystal_shard', 
        'rftoolsbase:dimensionalshard'
    )
    event.recipes.mekanism.combining(
        'ae2cs:purified_ender_quartz', 
        'rftoolsbase:dimensionalshard', 
        'apotheosis:luminous_crystal_shard'
    )
})