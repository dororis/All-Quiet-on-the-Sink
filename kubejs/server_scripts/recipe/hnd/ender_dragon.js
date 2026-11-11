ServerEvents.recipes(event => {
    event.custom({
        "type": "ae2:transform",
        "circumstance": {
            "type": "explosion"
        },
        "ingredients": [
            {"item":"minecraft:dragon_egg"},
            { "item":  "draconicevolution:dragon_heart"},
            { "item":  "hostilenetworks:data_model"}
            
        ],
        "result": {
            "count": 1,
            "id": "hostilenetworks:data_model",
            "components": {
                "hostilenetworks:data_model": "hostilenetworks:ender_dragon",
                "hostilenetworks:data": 1354
            }
        }
    })
})