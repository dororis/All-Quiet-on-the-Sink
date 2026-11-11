ServerEvents.recipes(event => {
    event.replaceInput(
        { input: 'irons_spellbooks:blank_rune' },
        'irons_spellbooks:blank_rune',
        Ingredient.of(['apotheosis:gem_fused_slate', 'irons_spellbooks:blank_rune'])
    )
})