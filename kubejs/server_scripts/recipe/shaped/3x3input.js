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
})