ServerEvents.recipes(event => {
    event.replaceInput(
        { id: 'enderio_evolution:alloy_smelter/stellar_alloy_ingot' },
        'minecraft:clay_ball',
        'mekanism_extras:alloy_radiance'  
    )
    event.replaceInput(
        { id: 'enderio_evolution:alloy_smelter/melodic_alloy_ingot' },
        'minecraft:popped_chorus_fruit',
        'mekanism:alloy_atomic'  
    )
    event.replaceInput(
        { id: 'enderio_evolution:capacitor/capacitor_atm' },
        'minecraft:shulker_shell',
        'mekanism:ultimate_control_circuit' 
    )
    event.replaceInput(
        { id: 'enderio_evolution:capacitor/capacitor_vibranium' },
        'minecraft:shulker_shell',
        'mekanism_extras:absolute_control_circuit'  
    )
    event.replaceInput(
        { id: 'enderio_evolution:capacitor/capacitor_unobtainium' },
        'minecraft:nether_star',
        'mekanism_extras:supreme_control_circuit'
    )
})