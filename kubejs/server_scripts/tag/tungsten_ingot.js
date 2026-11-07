ServerEvents.recipes(event => {
    event.replaceOutput(
        { id: 'neoecoae:tungsten_ingot' },
        'neoecoae:tungsten_ingot',
        'anvilcraft:tungsten_ingot' 
    )
})
ServerEvents.recipes(event => {
    event.replaceInput(
        { input: 'neoecoae:tungsten_ingot'},
        'neoecoae:tungsten_ingot',
        'anvilcraft:tungsten_ingot'
    )
})
ServerEvents.recipes(event => {
    event.replaceInput(
        { input: 'neoecoae:tungsten_block'},
        'neoecoae:tungsten_block',
        'anvilcraft:tungsten_block'
    )
    event.replaceOutput(
        { input: 'neoecoae:tungsten_block'},
        'neoecoae:tungsten_block',
        'anvilcraft:tungsten_block'
    )
})
ServerEvents.recipes(event => {
    event.replaceInput(
        { input: 'neoecoae:raw_tungsten_ore'},
        'neoecoae:raw_tungsten_ore',
        'anvilcraft:raw_tungsten'
    )
    event.replaceOutput(
        { input: 'neoecoae:raw_tungsten_ore'},
        'neoecoae:raw_tungsten_ore',
        'anvilcraft:raw_tungsten'
    )
})