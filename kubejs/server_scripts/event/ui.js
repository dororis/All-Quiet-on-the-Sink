const SLAYER_STATUS_MACHINE = 'mbd2:apotheosis_slayer_factory'
const SLAYER_MAX_HEAT = 24000.0
const SLAYER_BONUS_AT_MAX_HEAT = 8.0222
const SLAYER_BASE_ENERGY_PER_TICK = 4096.0
const SlayerSupplierDataSource = Java.loadClass('com.lowdragmc.lowdraglib2.gui.sync.bindings.impl.SupplierDataSource')

function getSlayerStatus(machine) {
    const data = machine.customData
    const heat = data.getFloat('heat')
    const fallbackSpeed = Math.min(8.0, 1.0 + (heat / SLAYER_MAX_HEAT) * (SLAYER_BONUS_AT_MAX_HEAT - 1.0))
    const fallbackParallel = Math.max(1, Math.min(8, Math.floor(fallbackSpeed)))

    const formed = data.contains('slayer_formed') ? data.getBoolean('slayer_formed') : true
    const state = data.contains('slayer_state') ? data.getString('slayer_state') : '空闲'
    const speed = data.contains('slayer_speed') ? data.getFloat('slayer_speed') : fallbackSpeed
    const parallel = data.contains('slayer_parallel') ? data.getInt('slayer_parallel') : fallbackParallel
    const energyPerTick = data.contains('slayer_energy') ? data.getInt('slayer_energy') : Math.floor(SLAYER_BASE_ENERGY_PER_TICK * parallel)

    return {
        formed: formed,
        state: state,
        speed: speed,
        parallel: parallel,
        energyPerTick: energyPerTick
    }
}

MBDMachineEvents.onUI(SLAYER_STATUS_MACHINE, wrapper => {
    const { machine, ui } = wrapper.event
    if (!machine || !ui) return

    const statusLabel = ui.selectId('text').findFirst().orElse(null)
    if (statusLabel === null) {
        console.warn('Missing UI element #text on ' + SLAYER_STATUS_MACHINE)
        return
    }

    statusLabel.textStyle(style => {
        style.fontSize(8.0)
        style.textShadow(true)
        style.lineSpacing(2.0)
        style.adaptiveHeight(true)
    })

    const source = SlayerSupplierDataSource.of(() => {
        const status = getSlayerStatus(machine)
        const stateColor = status.state === '电力不足' || status.state === '输出空间不足' ? '§c' : '§e'

        return Component.literal(
            '§7结构: ' + (status.formed ? '§a已成型' : '§c未成型') + '\n' +
            '§7状态: ' + stateColor + status.state + '\n' +
            '§7速度效率: §b' + Number(status.speed).toFixed(2) + 'x\n' +
            '§7并行数: §b' + status.parallel + '\n' +
            '§7耗电效率: §b' + status.energyPerTick + ' FE/t'
        )
    })

    statusLabel.bindDataSource(source)
})