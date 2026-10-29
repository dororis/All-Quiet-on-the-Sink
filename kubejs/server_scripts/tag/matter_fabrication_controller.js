ServerEvents.recipes(event => {
    event.replaceInput(
        { id: 'molecularmanipulator:matter_fabrication_controller'},
        'ae2:energy_cell',
        Ingredient.of(['overload_sim:transcendent_crystal'])
    )
})