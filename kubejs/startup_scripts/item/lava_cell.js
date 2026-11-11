StartupEvents.registry('item', event => {
    event.create('lava_cell', 'custom_infinity_cell')
         .texture('kubejs:item/lava_cell')
	 .fluidType('minecraft:lava')
	 .cellModel('kubejs:block/drive/lava_cell');
})