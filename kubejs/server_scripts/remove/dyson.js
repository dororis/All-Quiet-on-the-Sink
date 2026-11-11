ServerEvents.recipes(event => {
    const recipesToRemove = [
        'dysoncubeproject:dyson_hub', 
        'dysoncubeproject:bignumber_energy_output_port', 
        'fluxnetworks:ultimate_flux_storage', 
        'dysoncubeproject:cosmic_mining_hub', 
        'dysoncubeproject:laser_energy_input_port', 
        'dysoncubeproject:mining_item_output_port', 
        'dysoncubeproject:mining_fluid_output_port', 
        'dysoncubeproject:ore_processing_hub'
    ]
    recipesToRemove.forEach(id => {
        event.remove({ id: id })
    })
})