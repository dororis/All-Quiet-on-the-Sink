ServerEvents.recipes(event => {
    event.replaceInput(
        { input: 'oritech:silicon'},
        'oritech:silicon',
        Ingredient.of(['ae2:silicon'])
    )
})
ServerEvents.recipes(event => {
    event.replaceInput(
        { input: 'enderio:silicon'},
        'enderio:silicon',
        Ingredient.of(['ae2:silicon'])
    )
})
ServerEvents.recipes(event => {
    event.replaceInput(
        { input: 'oritech:silicon_block'},
        'oritech:silicon_block',
        Ingredient.of(['ae2cs:silicon_block','extendedae:silicon_block'])
    )
})
