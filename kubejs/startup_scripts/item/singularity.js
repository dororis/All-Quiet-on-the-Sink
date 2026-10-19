StartupEvents.registry('item', event => {
    event.create('singularity_cell', 'custom_infinity_cell')
         .texture('extendedae:item/infinity_cell')
	 .itemType('ae2:singularity')
	 .cellModel('kubejs:block/drive/infinity_cell');
})