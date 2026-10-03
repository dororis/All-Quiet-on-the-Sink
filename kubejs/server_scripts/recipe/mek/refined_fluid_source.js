ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:rotary",      
        "fluid_input": {
            "amount": 1,
            "fluid": "justdirethings:refined_t2_fluid_source"
        },
        "chemical_output": {
            "amount": 1,
            "id": "kubejs:unrefined_t2_fluid_source"
        },       
        "chemical_input": {
            "amount": 1,
            "chemical": "kubejs:unrefined_t2_fluid_source"
        },
        "fluid_output": {
            "amount": 1,
            "id": "justdirethings:refined_t2_fluid_source"
        }
    }).id('kubejs:rotary/t2_fluid')
})
ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:rotary",      
        "fluid_input": {
            "amount": 1,
            "fluid": "justdirethings:refined_t3_fluid_source"
        },
        "chemical_output": {
            "amount": 1,
            "id": "kubejs:unrefined_t3_fluid_source"
        },       
        "chemical_input": {
            "amount": 1,
            "chemical": "kubejs:unrefined_t3_fluid_source"
        },
        "fluid_output": {
            "amount": 1,
            "id": "justdirethings:refined_t3_fluid_source"
        }
    }).id('kubejs:rotary/t3_fluid')
})
ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:rotary",      
        "fluid_input": {
            "amount": 1,
            "fluid": "justdirethings:refined_t4_fluid_source"
        },
        "chemical_output": {
            "amount": 1,
            "id": "kubejs:unrefined_t4_fluid_source"
        },       
        "chemical_input": {
            "amount": 1,
            "chemical": "kubejs:unrefined_t4_fluid_source"
        },
        "fluid_output": {
            "amount": 1,
            "id": "justdirethings:refined_t4_fluid_source"
        }
    }).id('kubejs:rotary/t4_fluid')
})
ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:rotary",      
        "fluid_input": {
            "amount": 1,
            "fluid": "anvilcraft:helium"
        },
        "chemical_output": {
            "amount": 1,
            "id": "mekanismsun:helium"
        },       
        "chemical_input": {
            "amount": 1,
            "chemical": "mekanismsun:helium"
        },
        "fluid_output": {
            "amount": 1,
            "id": "anvilcraft:helium"
        }
    }).id('kubejs:rotary/helium')
})