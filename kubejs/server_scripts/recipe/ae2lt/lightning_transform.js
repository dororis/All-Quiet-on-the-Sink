ServerEvents.recipes(event => {
    event.custom(
    {
        "type": "ae2lt:lightning_transform",
        "priority": 0,
        "inputs": [
        {
            "ingredient": 
            {
            "item": "mbd2:seed_aggregator"
            },
            "count": 5
        },
        {
            "ingredient": 
            {
            "item": "ae2lt:overload_singularity"
            },
            "count": 1
        }
        ],
        "result": {
        "count": 1,
        "id": "mbd2:advanced_seed_aggregator"
        }
    })
    event.custom(
    {
        "type": "ae2lt:lightning_transform",
        "priority": 0,
        "inputs": [
        {
            "ingredient": 
            {
            "item": "minecraft:lead"
            },
            "count": 1
        }
        ],
        "result": {
        "count": 1,
        "id": "apothic_enchanting:occult_ender_lead"
        }
    })
    event.custom(
    {
        "type": "ae2lt:lightning_transform",
        "priority": 0,
        "inputs": [
        {
            "ingredient": 
            {
            "item": "ae2:not_so_mysterious_cube"
            },
            "count": 1
        }
        ],
        "result": {
        "count": 1,
        "id": "ae2:mysterious_cube"
        }
    })
    event.custom(
    {
        "type": "ae2lt:lightning_transform",
        "priority": 0,
        "inputs": [
        {
            "ingredient": 
            {
            "item": "minecraft:spawner"
            },
            "count": 1
        }
        ],
        "result": {
        "count": 1,
        "id": "minecraft:spawner",
        "components": {
            // 1.21.1 数据组件格式；字符串按 SNBT 解析，可保留 1s/1b 类型
            "minecraft:block_entity_data": '{Delay:1s,MaxNearbyEntities:32s,MaxSpawnDelay:20s,MinSpawnDelay:20s,RequiredPlayerRange:48s,SpawnCount:16s,SpawnData:{entity:{}},SpawnPotentials:[{data:{entity:{}},weight:1}],SpawnRange:2s,id:"minecraft:mob_spawner",modified:1b,stats:{"apothic_spawners:echoing":3,"apothic_spawners:ignore_conditions":1b,"apothic_spawners:ignore_players":1b,"apothic_spawners:no_ai":1b,"apothic_spawners:redstone_control":1b}}'
        }
        }
    })
    event.custom(
    {
        "type": "ae2lt:lightning_transform",
        "priority": 0,
        "inputs": [
        {
            "ingredient": 
            {
            "item": "alltheores:electrum_ingot"
            },
            "count": 1
        }
        ],
        "result": {
        "count": 1,
        "id": "anvilcraft:topaz",
        }
    })
    event.custom(
    {
        "type": "ae2lt:lightning_transform",
        "priority": 0,
        "inputs": [
        {
      "ingredient": {
        "item": "ae2lt:overload_processor"
      },
      "count": 32
    },
        {
            "ingredient": 
            {
            "item": "ae2lt:overload_alloy"
            },
            "count": 32
        },
    {
      "ingredient": {
        "item": "extendedae:ex_inscriber"
      },
      "count": 16
    }
        ],
        "result": {
        "count": 1,
        "id": "ae2lt:lightning_simulation_room",
        }
    })
    event.custom(
    {
        "type": "ae2lt:lightning_transform",
        "priority": 0,
        "inputs": [
        {
      "ingredient": {
        "item": "ae2lt:railgun_module_ehv_beam"
      },
      "count": 1
    },
    {
      "ingredient": {
        "item": "productivebees:amber"
      },
      "count": 1
    }
        ],
        "result": {
        "count": 1,
        "id": "productivebees:amber",
        "components": {
            // 1.21.1 数据组件格式；字符串按 SNBT 解析，可保留 1s/1b 类型
            "entity_data":'{id:"minecraft:lightning_bolt",name:"闪电"}'
        }
    }
})
})