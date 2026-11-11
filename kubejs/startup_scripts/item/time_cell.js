StartupEvents.registry('item', event => {
    event.create('time_fluid_cell', 'custom_infinity_cell')
    .texture('extendedae:item/infinity_cell')
	.fluidType('justdirethings:time_fluid_source')
    .cellModel('kubejs:block/drive/infinity_cell');
})