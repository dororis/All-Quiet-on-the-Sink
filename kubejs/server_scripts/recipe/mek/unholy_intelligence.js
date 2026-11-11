ServerEvents.recipes(event => {
    event.custom({
        "type":"mekanism:reaction",
        "chemical_input":{"amount":1000,"chemical":"mekanism:spent_nuclear_waste"},
        "chemical_output":{"amount":1000,"id":"mekanism_extras:thermonuclear"},
        "duration":100,
        "fluid_input":{"amount":1000,"tag":"c:sodium"},
        "item_input":{"count":1,"item":"cataclysm:abyssal_sacrifice"},
        "item_output":{"count":1,"id":"oritech:unholy_intelligence"}
    })
})