MBDMachineEvents.onUI('mbd2:3x3input', wrapper => {
    const { machine, ui } = wrapper.event

    const tank = machine.getTraitByName('fluid_tank_input')
    if (tank === null) return

    // 按钮 0
    const btn_0 = ui.selectId('fluid_dump_0').findFirst().orElse(null)
    if (btn_0 !== null) {
        btn_0.addServerEventListener(UIEvents.MOUSE_DOWN, click => {
            if (click.button !== 0) return
            tank.storages[0].getFluid().setAmount(0)
        })
    }

    // 按钮 1
    const btn_1 = ui.selectId('fluid_dump_1').findFirst().orElse(null)
    if (btn_1 !== null) {
        btn_1.addServerEventListener(UIEvents.MOUSE_DOWN, click => {
            if (click.button !== 0) return
            tank.storages[1].getFluid().setAmount(0)
        })
    }

    // 按钮 2
    const btn_2 = ui.selectId('fluid_dump_2').findFirst().orElse(null)
    if (btn_2 !== null) {
        btn_2.addServerEventListener(UIEvents.MOUSE_DOWN, click => {
            if (click.button !== 0) return
            tank.storages[2].getFluid().setAmount(0)
        })
    }
})
MBDMachineEvents.onUI('mbd2:smelting_furnace', wrapper => {
    const { machine, ui } = wrapper.event

    const tank = machine.getTraitByName('fluid_tank')
    if (tank === null) return

    // 按钮 0
    const btn_0 = ui.selectId('fluid_dump_0').findFirst().orElse(null)
    if (btn_0 !== null) {
        btn_0.addServerEventListener(UIEvents.MOUSE_DOWN, click => {
            if (click.button !== 0) return
            tank.storages[0].getFluid().setAmount(0)
        })
    }

    // 按钮 1
    const btn_1 = ui.selectId('fluid_dump_1').findFirst().orElse(null)
    if (btn_1 !== null) {
        btn_1.addServerEventListener(UIEvents.MOUSE_DOWN, click => {
            if (click.button !== 0) return
            tank.storages[1].getFluid().setAmount(0)
        })
    }

    // 按钮 2
    const btn_2 = ui.selectId('fluid_dump_2').findFirst().orElse(null)
    if (btn_2 !== null) {
        btn_2.addServerEventListener(UIEvents.MOUSE_DOWN, click => {
            if (click.button !== 0) return
            tank.storages[2].getFluid().setAmount(0)
        })
    }
    const btn_3 = ui.selectId('fluid_dump_3').findFirst().orElse(null)
    if (btn_3 !== null) {
        btn_3.addServerEventListener(UIEvents.MOUSE_DOWN, click => {
            if (click.button !== 0) return
            tank.storages[3].getFluid().setAmount(0)
        })
    }
})
