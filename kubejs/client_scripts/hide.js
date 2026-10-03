RecipeViewerEvents.removeEntries('item', event => {
    // 隐藏 3x3 输入总成
    event.remove('kubejs:3x3_input_assembly')
    
    // 隐藏 3x3 输出总成
    event.remove('kubejs:3x3_output_assembly')
    event.remove('irons_spellbooks:scroll')
    event.remove('kubejs:apothsis_slayer_factory')
    event.remove('kubejs:seed_breeder')
    event.remove('kubejs:seed_breeder_2')
    event.remove('kubejs:amethyst_growth_accelerator')
    event.remove('kubejs:earth_blast_furnace_controller')
    event.remove('mbd2:fake_machine')
    event.remove('meinfinitycell:infinity_cobblestone_cell')
    event.remove('meinfinitycell:infinity_water_cell')

})

