const AqsJadeBlockEntity = Java.loadClass('com.lowdragmc.mbd2.common.blockentity.MachineBlockEntity')
const AqsJadeRegistry = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')

// ======== 在这里填入所有需要显示的机器 ID ========
global.AQS_JADE_MACHINES = [
    'mbd2:atomic_reconstructor',
    'mbd2:frame_sandblaster', 
    'mbd2:dimensional_stabilimentum', 
    'mbd2:smelting_furnace', 
    'mbd2:sourcegate', 
    'mbd2:rainbow_generator'
]

// 统一的通用状态获取函数
global.getAqsMachineStatus = (machine) => {
    const logic = machine.recipeLogic
    const formed = machine.isFormedValid ? machine.isFormedValid() : machine.isFormed()

    if (!formed) return '未成型'
    if (logic.isSuspend()) return '已暂停'
    if (logic.isWorking()) return '运行中'
    
    if (logic.isWaiting()) {
        const reason = logic.getWaitingReason()
        const reasonText = reason === null ? '' : reason.getString()
        const lower = reasonText.toLowerCase()
    }
    return '空闲'
}
JadeEvents.onCommonRegistration(event => {
    global.AQS_JADE_MACHINES.forEach(blockId => {
        // 将机器 ID 中的冒号和斜杠替换掉，生成一个唯一的 Provider ID
        const providerId = 'aqs:jade_' + blockId.replace(':', '_').replace('/', '_')

        event.blockDataProvider(providerId, AqsJadeBlockEntity)
            .setCallback((tag, accessor) => {
                // 检查当前方块是否匹配
                const currentBlockId = String(AqsJadeRegistry.BLOCK.getKey(accessor.block))
                if (currentBlockId !== blockId) return

                const machine = accessor.blockEntity.getMetaMachine()
                if (machine === null) return

                const formed = machine.isFormedValid ? machine.isFormedValid() : machine.isFormed()
                const state = global.getAqsMachineStatus(machine)

                tag.putBoolean('formed', formed)
                tag.putString('state', state)
            })
    })
})