// kubejs/server_scripts/ad_astra_oxygen.js

const $OxygenTickEvent = Java.loadClass('earth.terrarium.adastra.api.events.AdAstraEvents$OxygenTickEvent')

$OxygenTickEvent.register((level, entity) => {
    // 只处理玩家
    if (!entity.isPlayer()) return true

    const player = entity

    // 依次检查四个装备槽
    const helmet = player.getItemBySlot('head')
    const chestplate = player.getItemBySlot('chest')
    const leggings = player.getItemBySlot('legs')
    const boots = player.getItemBySlot('feet')

    // 四件套全部满足才算
    const hasFullSet =
        helmet && helmet.id === 'anvilcraft:weatherproof_spacesuit_helmet' &&
        chestplate && chestplate.id === 'anvilcraft:weatherproof_spacesuit_chestplate' &&
        leggings && leggings.id === 'anvilcraft:weatherproof_spacesuit_leggings' &&
        boots && boots.id === 'anvilcraft:weatherproof_spacesuit_boots'

    if (hasFullSet) {
        // 穿齐四件套 → 取消氧气 tick
        return false
    }
    return true
})