ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:rotary",      
        "fluid_input": {
            "amount": 1,
            "fluid": "allthemodium:soul_lava"
        },
        "chemical_output": {
            "amount": 1,
            "id": "kubejs:soul_lava"
        },       
        "chemical_input": {
            "amount": 1,
            "chemical": "kubejs:soul_lava"
        },
        "fluid_output": {
            "amount": 1,
            "id": "allthemodium:soul_lava"
        }
    }).id('kubejs:rotary/soul_lava_to_soul_lava')
})
ServerEvents.recipes(event => {
    event.custom({           
        "type": "advanced_ae:reaction",
        "input_energy": 20000,
        "input_fluid": {
        "amount": 100,
        "ingredient": {
        "fluid": "justdirethings:refined_t2_fluid_source"
        }
        },
        "input_items": [
        {
        "amount": 16,
        "ingredient": {
        "item": "irons_spellbooks:cinder_essence"
        }
        },
        {
        "amount": 48,
        "ingredient": {
        "item": "irons_spellbooks:arcane_essence"
        }
        }
        ],
        "output": {
        "#": 1000,
        "#t": "ae2:f",
        "id": "allthemodium:soul_lava"
        }
    })
})
