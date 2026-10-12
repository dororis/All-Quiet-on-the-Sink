ServerEvents.recipes(event => {
  // .energizing([inputs, ...], output, energy)
  event.recipes.powah.energizing(['ae2lt:perfect_electro_chime_crystal',
    'enderio_evolution:capacitor_atm',
    'enderio_evolution:capacitor_vibranium',
    'enderio_evolution:capacitor_unobtainium',
    'enderio_evolution:capacitor_piglich'],
    'oritech:overcharged_crystal' , 999999999)
})