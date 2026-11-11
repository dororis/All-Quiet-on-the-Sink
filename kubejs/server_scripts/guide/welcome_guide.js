PlayerEvents.loggedIn(event => {
    const player = event.player
    const data = player.persistentData

    if (data.getBoolean('aqs_welcomed')) return
    data.putBoolean('AQS_welcomed', true)

    event.server.scheduleInTicks(40, () => {
        player.tell(Component.literal('§6§l=== 欢迎来到水槽无战事 ==='))
        player.tell(Component.literal('§6§l=== Welcome to AQS ==='))
    })
})
