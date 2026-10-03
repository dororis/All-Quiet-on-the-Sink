ServerEvents.recipes(event => {
    event.remove({ output: 'mekanism:seismic_vibrator' })
    event.shaped(
        'mekanism:seismic_vibrator',
        [
            'ABA',
            'DCD',
            'AAA'
        ],
        {
            A: 'ae2omnicells:charged_ender_ingot', 
            B: 'ae2:wireless_receiver',             
            C: 'mekanism:steel_casing',             
            D: 'ae2cs:resonating_processor'       
        }
    ).id('kubejs:seismic_vibrator')
})