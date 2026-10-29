ServerEvents.recipes(event => {
  event.custom({
    type: 'molecularmanipulator:matter_research',
    title: '戴森中枢研究',
    stage: 1,
    sort_order: 1,
    prerequisites: ['molecularmanipulator:research/ae_foundation'],
    "prerequisite_levels": {
    "molecularmanipulator:research/ae_foundation": 4
  },
    ingredients: 
    [
        {ingredient: {item: 'ad_astra:desh_block'}, count: '64'},
        {ingredient: {item: 'astralsorcery:starmetal_ingot'}, count: '64'},
        {ingredient: {item: 'powahaddon:crystal_galaxy'}, count: '64'}
    ],
    depths: [
      {
        parallel: '1',         
        processing_ticks: 1     
      },
      {
        parallel: '1',          
        processing_ticks: 1  
      },
      {
        parallel: '1',        
        processing_ticks: 1     
      },
      {
        parallel: '1',        
        processing_ticks: 1     
      }
    ],
    duration: 60,
    ae_per_tick: 128,
    unlocks: ['kubejs:dyson_hub'],
  }).id('kubejs:dyson_hub_research');
  event.custom({
    type: 'molecularmanipulator:matter_fabrication',
    ingredients: [{ingredient: {item: 'ae2lt:firmament_conversion_core'}, count: 1}],
    results: 
    [
        {id: 'dysoncubeproject:dyson_hub', count: 1}
    ],
    processing_time: 200,
    ae_per_tick: 64,
    requires_research: true
  }).id('kubejs:dyson_hub');
});
ServerEvents.recipes(event => {
  event.custom({
    type: 'molecularmanipulator:matter_research',
    title: '戴森通量研究',
    stage: 2,
    sort_order: 2,
    prerequisites: ['kubejs:dyson_hub_research'],
    "prerequisite_levels": {
    "kubejs:dyson_hub_research": 4
  },
    ingredients: 
    [
        {ingredient: {item: 'draconicevolution:draconic_capacitor'}, count: '16'},
        {ingredient: {item: 'neoecoprototype:energized_energy_cell_512g'}, count: '16'},
        {ingredient: {item: 'ae2lt:energy_module_t3'}, count: '16'}
    ],
    depths: [
      {
        parallel: '1',         
        processing_ticks: 1     
      },
      {
        parallel: '1',          
        processing_ticks: 1  
      },
      {
        parallel: '1',        
        processing_ticks: 1     
      },
      {
        parallel: '1',        
        processing_ticks: 1     
      }
    ],
    duration: 60,
    ae_per_tick: 128,
    unlocks: [
      'kubejs:ultimate_flux_storage', 
      'kubejs:bignumber_energy_output_port'
    ]
  }).id('kubejs:dyson_flux_research');
  event.custom({
    type: 'molecularmanipulator:matter_fabrication',
    ingredients: [{ingredient: {item: 'fluxnetworks:flux_controller'}, count: 1}],
    results: 
    [
        {id: 'fluxnetworks:ultimate_flux_storage', count: 1}
    ],
    processing_time: 200,
    ae_per_tick: 64,
    requires_research: true
  }).id('kubejs:ultimate_flux_storage');
  event.custom({
    type: 'molecularmanipulator:matter_fabrication',
    ingredients: [{ingredient: {item: 'appflux:flux_accessor'}, count: 1}],
    results: 
    [
        {id: 'dysoncubeproject:bignumber_energy_output_port', count: 1}
    ],
    processing_time: 200,
    ae_per_tick: 64,
    requires_research: true
  }).id('kubejs:bignumber_energy_output_port');
});
ServerEvents.recipes(event => {
  event.custom({
    type: 'molecularmanipulator:matter_research',
    title: '戴森矿产研究',
    stage: 3,
    sort_order: 3,
    prerequisites: ['kubejs:dyson_flux_research'],
    "prerequisite_levels": {
    "kubejs:dyson_flux_research": 4
  },
    ingredients: 
    [
        {ingredient: {item: 'ae2lt:pigmee_fumo'}, count: '1'},
        {ingredient: {item: 'anvilcraft:chocolate_cake_block'}, count: '1'},
        {ingredient: {item: 'oritech:promethium_pickaxe'}, count: '1'}
    ],
    depths: [
      {
        parallel: '1',         
        processing_ticks: 1     
      },
      {
        parallel: '1',          
        processing_ticks: 1  
      },
      {
        parallel: '1',        
        processing_ticks: 1     
      },
      {
        parallel: '1',        
        processing_ticks: 1     
      }
    ],
    duration: 60,
    ae_per_tick: 128,
    unlocks: [
      'kubejs:cosmic_mining_hub', 
      'kubejs:laser_energy_input_port',
      'kubejs:mining_fluid_output_port', 
      'kubejs:mining_item_output_port', 
      'kubejs:ore_processing_hub', 
    ]
  }).id('kubejs:dyson_mining_research');
  event.custom({
    type: 'molecularmanipulator:matter_fabrication',
    ingredients: [{ingredient: {item: 'ae2lt:mining_factory'}, count: 1}],
    results: 
    [
        {id: 'dysoncubeproject:cosmic_mining_hub', count: 1}
    ],
    processing_time: 200,
    ae_per_tick: 64,
    requires_research: true
  }).id('kubejs:cosmic_mining_hub');
  event.custom({
    type: 'molecularmanipulator:matter_fabrication',
    ingredients: [{ingredient: {item: 'mekanism_extras:lead_coated_laser_focus_matrix'}, count: 1}],
    results: 
    [
        {id: 'dysoncubeproject:laser_energy_input_port', count: 1}
    ],
    processing_time: 200,
    ae_per_tick: 64,
    requires_research: true
  }).id('kubejs:laser_energy_input_port');
  event.custom({
    type: 'molecularmanipulator:matter_fabrication',
    ingredients: [{ingredient: {item: 'molecularmanipulator:matter_fabrication_fluid_output'}, count: 1}],
    results: 
    [
        {id: 'dysoncubeproject:mining_fluid_output_port', count: 1}
    ],
    processing_time: 200,
    ae_per_tick: 64,
    requires_research: true
  }).id('kubejs:mining_fluid_output_port');
  event.custom({
    type: 'molecularmanipulator:matter_fabrication',
    ingredients: [{ingredient: {item: 'molecularmanipulator:matter_fabrication_item_output'}, count: 1}],
    results: 
    [
        {id: 'dysoncubeproject:mining_item_output_port', count: 1}
    ],
    processing_time: 200,
    ae_per_tick: 64,
    requires_research: true
  }).id('kubejs:mining_item_output_port');
  event.custom({
    type: 'molecularmanipulator:matter_fabrication',
    ingredients: [{ingredient: {item: 'mekanismelements:infinity_ore_reprocessing'}, count: 1}],
    results: 
    [
        {id: 'dysoncubeproject:ore_processing_hub', count: 1}
    ],
    processing_time: 200,
    ae_per_tick: 64,
    requires_research: true
  }).id('kubejs:ore_processing_hub');
});