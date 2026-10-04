ServerEvents.recipes(event => {
    event.shaped(
        'mbd2:3x3input', 
        [
            ' A ', 
            ' B ', 
            ' C '  
        ],
        {
            A: 'mekanism:basic_fluid_tank',                    
            B: 'mekanism:basic_bin',        
            C: 'mekanism:energy_tablet'      
        }
    )
    event.shaped(
        'mbd2:3x3output',
        [
            ' A ', 
            ' B ', 
            ' C ' 
        ],
        {
            A: 'mekanism:energy_tablet',                    
            B: 'mekanism:basic_bin',        
            C: 'mekanism:basic_fluid_tank' 
        }
    )
    event.shaped(
        'dimstorage:dimensional_chest',
        [
            'ACA', 
            'CBC', 
            'ACA' 
        ],
        {
            A: 'rftoolsbase:dimensionalshard',                    
            B: 'mekanism:basic_bin',
            C:'rftoolsbase:infused_enderpearl'         
        }
    )
    event.shaped(
        'dimstorage:dimensional_tank',
        [
            'ABA', 
            'BCB', 
            'ABA' 
        ],
        {
            A: 'rftoolsbase:dimensionalshard',                            
            C: 'mekanism:basic_fluid_tank',
            B:'rftoolsbase:infused_enderpearl'  
        }
    )
})