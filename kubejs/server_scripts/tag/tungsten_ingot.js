ServerEvents.recipes(event => {
    event.replaceOutput(
        { id: 'anvilcraft:tungsten_ingot' },
        'anvilcraft:tungsten_ingot',
        'neoecoae:tungsten_ingot' 
    )
})
ServerEvents.recipes(event => {
    event.replaceInput(
        { input: 'anvilcraft:tungsten_ingot'},
        'anvilcraft:tungsten_ingot',
        'neoecoae:tungsten_ingot'
    )
})