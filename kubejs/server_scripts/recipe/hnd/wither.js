ServerEvents.recipes(event => {
    event.custom({
        "type": "ae2:transform",
        "circumstance": {
            "type": "explosion"
        },
        "ingredients": [
            {"item":"minecraft:wither_skeleton_skull"},
            { "item":  "minecraft:nether_star"},
            { "item":  "hostilenetworks:data_model"}
            
        ],
        "result": {
            "count": 1,
            "id": "hostilenetworks:data_model",
            "components": {
                "hostilenetworks:data_model": "hostilenetworks:wither",
                "hostilenetworks:data": 1354
            }
        }
    })
})