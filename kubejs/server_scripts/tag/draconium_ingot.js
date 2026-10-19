ServerEvents.recipes(event => {
    event.replaceInput(
        { input: 'draconicevolution:draconium_ingot'},
        'draconicevolution:draconium_ingot',
        Ingredient.of(['allthemodium:unobtainium_ingot','draconicevolution:draconium_ingot'])
    )
})