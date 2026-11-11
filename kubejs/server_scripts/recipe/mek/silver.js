ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:separating",
        "input": {
            "amount": 3,
            "fluid": "alltheores:molten_silver"
            },
            "left_chemical_output":
            {
            
                "amount": 2,
                "id": "alltheores:dirty_silver"
            },
            "right_chemical_output":{
                "amount": 1,
                "id": "alltheores:clean_silver"
            }
    }).id('kubejs:separating/silver')
})
