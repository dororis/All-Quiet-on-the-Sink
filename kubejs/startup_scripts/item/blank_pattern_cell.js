StartupEvents.registry('item', event => {
    event.create('blank_pattern_cell', 'custom_infinity_cell')
         .texture('extendedae:item/infinity_cell')
	 .itemType('ae2:blank_pattern')
	 .cellModel('kubejs:block/drive/infinity_cell');
})