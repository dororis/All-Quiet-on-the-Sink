StartupEvents.registry('item', event => {
  event.create('atm_ore_hammer')
    .displayName('§6ATM矿锤')             
    .maxStackSize(1)
    .tooltip('§9关闭替换')                   
    .rarity('epic')
    .tag('alltheores:ore_hammers')                      
})
ItemEvents.modification(event => {
    event.modify('kubejs:atm_ore_hammer', item => {
        item.craftingRemainder = Item.of('kubejs:atm_ore_hammer')
    })
})