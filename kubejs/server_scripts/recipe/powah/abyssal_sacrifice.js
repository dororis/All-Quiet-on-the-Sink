ServerEvents.recipes(event => {
  // .energizing([inputs, ...], output, energy)
  event.recipes.powah.energizing(['cataclysm:ignitium_block'
    ,'cataclysm:cursium_block',
    'cataclysm:witherite_block',
    'anvilcraft:cursed_gold_block',
    'anvilcraft:enchanted_gold_block',
    'oritech:dubios_container',
    ], 
    'cataclysm:abyssal_sacrifice', 7777777)
})