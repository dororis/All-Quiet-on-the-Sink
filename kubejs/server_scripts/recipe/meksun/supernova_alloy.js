// 放在 kubejs/server_scripts/ 下
ServerEvents.recipes(event => {
    event.recipes.mekanism.metallurgic_infusing(
        'mekanismsun:supernova_alloy',                 
        'mekanism_extras:alloy_spectrum',         
        'mekmm:uu_matter',                 
        false                                          
    )
})