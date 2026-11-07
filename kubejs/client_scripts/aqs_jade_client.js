const AqsJadeMachineBlock = Java.loadClass('com.lowdragmc.mbd2.common.block.MBDMachineBlock')
const AqsJadeRegistry = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')

JadeEvents.onClientRegistration(event => {
    global.AQS_JADE_MACHINES.forEach(blockId => {
        const providerId = 'aqs:jade_' + blockId.replace(':', '_').replace('/', '_')

        event.block(providerId, AqsJadeMachineBlock)
            .tooltip((tooltip, accessor, config) => {
                const currentBlockId = String(AqsJadeRegistry.BLOCK.getKey(accessor.block))
                if (currentBlockId !== blockId) return

                const data = accessor.serverData
                if (!data.contains('state')) return

                tooltip.add(Component.literal('§7结构: ' + (data.getBoolean('formed') ? '§a已成型' : '§c未成型')))
                tooltip.add(Component.literal('§7状态: §f' + data.getString('state')))
            })
    })
})