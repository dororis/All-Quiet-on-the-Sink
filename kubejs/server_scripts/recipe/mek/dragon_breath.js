ServerEvents.recipes(event => {
    event.custom({
        "type":"mekanism:reaction",
        "chemical_input":{"amount":10,"chemical":"mekanism:antimatter"},
        "chemical_output":{"amount":1000,"id":"kubejs:dragon_breath"},
        "duration":100,
        "fluid_input":{"amount":1000,"tag":"c:hydrogen"},
        "item_input":{"count":1,"item":"apothic_enchanting:infused_breath"},
        "item_output":{"count":1,"id":"draconicevolution:chaos_shard"}
    })
})