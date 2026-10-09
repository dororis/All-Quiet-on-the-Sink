ServerEvents.recipes(event => {
    event.custom(
        {
        "type": "ae2:transform",
        "circumstance": {
            "type": "explosion"
        },
        "ingredients": [
            {"item":"rftoolsbase:dimensionalshard"},
            {"item":"apotheosis:godforged_pearl"}, 
        ],
        "result": {
            "count": 1,
            "id": "ae2:singularity"
            }
        }
    )
})