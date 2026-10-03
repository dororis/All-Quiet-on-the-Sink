ServerEvents.recipes(event => {
  event.shaped(
    'extendedae:void_cell', // 输出物品
    [
      'ABA', 
      'CDC', 
      'EEE'
    ],
    {
      A: 'ae2:quartz_glass',          
      B: 'ae2:condenser',               
      C: 'ae2:void_card',        
      D: 'appgen:singularity_generator_256m',             
      E: 'irons_spellbooks:divine_soulshard'             
    }
  )
})