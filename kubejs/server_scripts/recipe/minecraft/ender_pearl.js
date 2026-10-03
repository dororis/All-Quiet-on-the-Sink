ServerEvents.recipes(event => {
    // 对应小键盘布局：3右上，4左中，5正中间，7左下，8下中
    event.custom(
        {
  "type": "minecraft:crafting_shaped",
  "category": "misc",
  "key": {
    "a": {
      "item": "minecraft:magma_cream"
    },
    "b":{
        "item":"alltheores:lead_dust"
    },
    "c":{
        "item":"alltheores:platinum_dust"
    },
    "h": {
      "tag": "alltheores:ore_hammers"
    }
  },
  "pattern": [
    " h ",
    "bab",
    " c "
  ],
  "result": {
    "count": 1,
    "id": "minecraft:ender_pearl"
  }
}
    )
})
ServerEvents.recipes(event => {
    event.shaped(
        Item.of('minecraft:hopper'), 
        [
            'ABA',
            'ABA',
            ' A '
        ],
        {
            A: 'minecraft:iron_ingot',        
            B: '#minecraft:logs'               
        }
    )
    event.shaped(
        Item.of('minecraft:chest',4),
        [
            'AAA',
            'A A',
            'AAA'
        ],
        {        
            A: '#minecraft:logs'               
        }
    )
})