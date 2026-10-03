ServerEvents.recipes(event => {
    event.custom({
        "type": "mekmm:pressing",
        "primary_input": {
            "count": 4,          // 主输入物品数量
            "item": "alltheores:steel_plate"       // 主输入物品ID
        },
        "secondary_input": {
            "count": 4,
            "item": "apotheosis:timeworn_fabric"         // 副输入，可使用 tag 或 item
        },
        "tertiary_input": {
            "count": 4,
            "item": "ae2:printed_silicon"        // 第三输入物品ID
        },
        "output": {
            "count": 4,          // 输出数量
            "id": "oritech:reinforced_carbon_sheet"
        }
    })
})