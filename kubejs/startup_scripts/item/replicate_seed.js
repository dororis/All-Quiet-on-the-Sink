StartupEvents.registry('item', event => {
  event.create('replicate_seed')
    .displayName('复制种子')             
    .maxStackSize(64)
    .tooltip('极不稳定，无法催生')
    .texture('kubejs:item/replicate_seed')                                      
})