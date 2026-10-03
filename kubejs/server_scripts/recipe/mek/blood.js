ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:separating",
        "input": {
            "amount": 2,
            "fluid": "irons_spellbooks:blood"
            },
            "left_chemical_output":
            {
            
                "amount": 1,
                "id": "kubejs:blood"
            },
            "right_chemical_output":{
                "amount": 1,
                "id": "mekmm:nutritional_paste"
            }
    }).id('kubejs:separating/blood_separation')
})
