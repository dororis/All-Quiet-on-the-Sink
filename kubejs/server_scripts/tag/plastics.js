ServerEvents.recipes(event => {
    event.replaceInput(
        { input: 'oritech:plastic_sheet'},
        'oritech:plastic_sheet',
        Ingredient.of(['industrialforegoing:plastic'])
    )
})