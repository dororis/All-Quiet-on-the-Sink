// kubejs/server_scripts/pig_rain.js

ServerEvents.tick(event => {
    // 每 20 tick（1秒）检查一次
    if (event.server.tickCount % 20 !== 0) return

    // 遍历所有玩家
    event.server.players.forEach(player => {
        // 1. 判断玩家是否在指定维度
        if (player.level.dimension !== 'aqs:pigmee_world') return

        // 2. 判断玩家脚下是否是粉红色羊毛
        const feetPos = player.blockPosition().below()
        const blockBelow = player.level.getBlockState(feetPos).block
        if (blockBelow.id !== 'minecraft:pink_wool') return

        // 3. 在玩家头顶上方 20 格生成猪
        const x = player.x
        const y = player.y + 20
        const z = player.z

        const pig = player.level.createEntity('minecraft:pig')
        pig.setPosition(x, y, z)
        pig.addTag('invincible_pig')
        pig.spawn()
        pig.potionEffects.add('minecraft:slow_falling', 1200, 0, false, false)

        // 4. 在猪生成的位置同时生成烟花（苦力怕脸形状，粉色）
        const firework = player.level.createEntity('minecraft:firework_rocket')
        firework.setPosition(x, y, z)
        firework.mergeNbt({
            Life: 0,
            LifeTime: 20,
            FireworksItem: {
                id: 'minecraft:firework_rocket',
                Count: 1,
                tag: {
                    Fireworks: {
                        Explosions: [{
                            Type: 2,
                            Colors: [0xFFC0CB],
                            FadeColors: [0xFF69B4],
                            Trail: true,
                            Flicker: true
                        }]
                    }
                }
            }
        })
        firework.spawn()
    })
})

// 猪无敌
EntityEvents.beforeHurt(event => {
    const { entity, source } = event
    if (entity.type !== 'minecraft:pig') return
    if (!entity.tags.contains('invincible_pig')) return
    event.cancel()
})