ServerEvents.recipes(event => {
    event.custom({
        "type": "ae2:transform",
        "circumstance": {
            "type": "explosion"
        },
        "ingredients": [
            {"item":"ae2lt:pigmee_fumo"},
            { "item":  "allthemodium:piglich_heart"},
            { "item":  "hostilenetworks:data_model"}
            
        ],
        "result": {
            "count": 1,
            "id": "hostilenetworks:data_model",
            "components": {
                "hostilenetworks:data_model": "hostilenetworks:allthemodium/piglich",
                "hostilenetworks:data": 1354
            }
        }
    })
})