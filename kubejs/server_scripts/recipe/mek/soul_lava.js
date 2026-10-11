ServerEvents.recipes(event => {
    event.custom(
        {"type":"mekanism:dissolution",
            "chemical_input":
                {"amount":100,"chemical":"mekanism:superheated_sodium"},
                "item_input":{"count":1,"tag":"c:ingots/vibranium"},
                "output":{"amount":1000,"id":"kubejs:soul_lava"},
                "per_tick_usage":false
        })
    event.custom(
        {"type":"mekanism:dissolution",
            "chemical_input":
                {"amount":900,"chemical":"mekanism:superheated_sodium"},
                "item_input":{"count":1,"tag":"c:storage_blocks/vibranium"},
                "output":{"amount":9000,"id":"kubejs:soul_lava"},
                "per_tick_usage":false
        })
})