ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "jdte:infusion",
            "id": "jdte:echo_shard_infusion",
            "input": {
            "id": "apotheosis:luminous_crystal_shard",
            "count": 1
        },
            "fluid": {
            "id": "justdirethings:refined_t4_fluid_source",
            "amount": 1000
        },
            "output": {
            "id": "minecraft:echo_shard",
            "count": 1
        },
        "energy": 500
    })   
    event.custom(
        {
            "type": "jdte:infusion",
            "id": "jdte:time_crystal_infusion",
            "input": {
            "id": "minecraft:echo_shard",
            "count": 1
        },
            "fluid": {
            "id": "justdirethings:time_fluid_source",
            "amount": 1000
        },
            "output": {
            "id": "justdirethings:time_crystal",
            "count": 1
        },
        "energy": 5000
    })
    event.custom(
        {
            "type": "jdte:infusion",
            "id": "jdte:divine_soulshard_infusion",
            "input": {
            "id": "justdirethings:time_crystal",
            "count": 1
        },
            "fluid": {
            "id": "irons_spellbooks:timeless_slurry",
            "amount": 1000
        },
            "output": {
            "id": "irons_spellbooks:divine_soulshard",
            "count": 1
        },
        "energy": 50000
    })    
})

