ServerEvents.recipes(event => {
    event.custom({
        "type":"mekanism:reaction",
        "chemical_input":{"amount":1000,"chemical":"mekanism:oxygen"},
        "chemical_output":{"amount":1000,"id":"mekanism:steam"},
        "duration":100,
        "fluid_input":{"amount":100,"tag":"minecraft:lava"},
        "item_input":{"count":1,"item":"anvilcraft:resin"},
        "item_output":{"count":1,"id":"anvilcraft:hardend_resin"}
    })
})