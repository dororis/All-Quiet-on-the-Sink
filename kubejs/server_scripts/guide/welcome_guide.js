PlayerEvents.loggedIn(event => {
    const player = event.player
    const data = player.persistentData

    // 只引导一次（记录标记，避免每次进世界都刷屏）
    if (data.getBoolean('aqs_welcomed')) return
    data.putBoolean('AQS_welcomed', true)

    // 延迟发送，确保玩家已完全进入世界
    event.server.scheduleInTicks(40, () => {
        player.tell(Component.literal('§6§l=== 欢迎来到水槽无战事 ==='))
        player.tell(Component.literal('§6§l=== Welcome to AQS ==='))
    })
})
