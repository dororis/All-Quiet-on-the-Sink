ServerEvents.recipes(event => {
    event.replaceInput(
        { input: 'ars_nouveau:greater_experience_gem' },
        'ars_nouveau:greater_experience_gem',
        Ingredient.of(['ars_nouveau:greater_experience_gem','anvilcraft:exp_gem' ]) 
    )
})