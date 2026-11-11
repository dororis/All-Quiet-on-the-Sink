ServerEvents.recipes(event => {
    event.shaped(
        'mbd2:configurable', 
        [
            ' B ', 
            ' D ', 
            ' E '  
        ],
        {                  
            B: 'minecraft:grindstone',             
            D:'minecraft:spawner',
            E:'minecraft:cauldron'
        }
    )
    event.shaped(
        'mbd2:basic_configurable', 
        [
            'ABA', 
            'CDC', 
            'ABA'  
        ],
        {                  
            A:'apotheosis:gem_dust',
            B: 'mekanism:basic_control_circuit',
            C:'minecraft:iron_ingot',             
            D:'mbd2:configurable',
        }
    )
    event.shaped(
        'mbd2:advanced_configurable', // 输出：传送门离心机
        [
            'ABA', 
            'CDC', 
            'ABA'  
        ],
        {                  
            A:'apotheosis:mysterious_scrap_metal',
            B: 'mekanism:advanced_control_circuit',
            C:'apotheosis:timeworn_fabric',             
            D:'mbd2:basic_configurable',
        }
    )
    event.shaped(
        'mbd2:elite_configurable', // 输出：传送门离心机
        [
            'ABA', 
            'CDC', 
            'ABA'  
        ],
        {                  
            A:'apotheosis:luminous_crystal_shard',
            B: 'mekanism:elite_control_circuit',
            C:'apotheosis:arcane_sands',             
            D:'mbd2:advanced_configurable',
        }
    )
    event.shaped(
        'mbd2:ultimate_configurable', // 输出：传送门离心机
        [
            'ABA', 
            'CDC', 
            'ABA'  
        ],
        {                  
            A:'apotheosis:god_fused_pearl',
            B: 'mekanism:ultimate_control_circuit',
            C:'ae2:singularity',             
            D:'mbd2:elite_configurable',
        }
    )
    event.shaped(
        'mbd2:apotheosis_slayer_factory',
        [
            'ACA', 
            'BDB', 
            'ACA'  
        ],
        {
            A:'apotheosis:godforged_pearl',
            B:'apotheosis:spawner_rune',
            C:'mekanism:ultimate_control_circuit',
            D:'mbd2:elite_configurable'
        } 
    )
    event.shaped(
        'mbd2:dimensional_stabilimentum',
        [
            'ACA', 
            'BDB', 
            'ACA'  
        ],
        {
            A:'apotheosis:godforged_pearl',
            B:'rftoolsbase:dimensionalshard',
            C:'mekanism:ultimate_control_circuit',
            D:'mbd2:elite_configurable'
        } 
    )
    event.shaped(
        'factory_blocks:pgcircuit',
        [
            'ABA', 
            'BDB', 
            'ABA'  
        ],
        {
            A:'alltheores:steel_ingot',
            B:'apotheosis:gem_fused_slate',
            D:'alltheores:osmium_ingot'
        } 
    )
})