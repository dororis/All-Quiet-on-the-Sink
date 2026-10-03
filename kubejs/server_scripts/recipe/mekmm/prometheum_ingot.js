ServerEvents.recipes(event => {
    event.custom({
        "type": "mekmm:pressing",
        "primary_input": {
            "count": 1,          // 主输入物品数量
            "item": "oritech:overcharged_crystal"       // 主输入物品ID
        },
        "secondary_input": {
            "count": 4,
            "item": "enderio_evolution:stellar_alloy_ingot"         // 副输入，可使用 tag 或 item
        },
        "tertiary_input": {
            "count": 1,
            "item": "oritech:heisenberg_compensator"        // 第三输入物品ID
        },
        "output": {
            "count": 1,          // 输出数量
            "id": "oritech:prometheum_ingot"
        }
    })
})