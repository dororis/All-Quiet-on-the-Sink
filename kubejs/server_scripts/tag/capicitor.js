ServerEvents.recipes(event => {
    event.replaceInput(
        { input: 'powah:capacitor_hardened' },
        'powah:capacitor_hardened',
        'mekanism:basic_control_circuit'  
    )
    event.replaceInput(
        { input: 'powah:capacitor_blazing' },
        'powah:capacitor_blazing',
        'mekanism:advanced_control_circuit'  
    )
    event.replaceInput(
        { input: 'powah:capacitor_niotic' },
        'powah:capacitor_niotic',
        'mekanism:elite_control_circuit'  
    )
    event.replaceInput(
        { input: 'powah:capacitor_spirited' },
        'powah:capacitor_spirited',
        'mekanism:ultimate_control_circuit'  
    )
})