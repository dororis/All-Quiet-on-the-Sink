const AqsSlayerMachineBlock = Java.loadClass('com.lowdragmc.mbd2.common.block.MBDMachineBlock')
const AqsJadeBuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')

const AQS_JADE_BLOCK_ID = 'mbd2:apotheosis_slayer_factory'
const AQS_JADE_PROVIDER_ID = 'aqs:apotheosis_slayer_status'

JadeEvents.onClientRegistration(event => {
    event.block(AQS_JADE_PROVIDER_ID, AqsSlayerMachineBlock)
        .tooltip((tooltip, accessor, config) => {
            const blockId = String(AqsJadeBuiltInRegistries.BLOCK.getKey(accessor.block))
            if (blockId !== AQS_JADE_BLOCK_ID) return

            const data = accessor.serverData
            if (!data.contains('state')) return

            tooltip.add(Component.literal('§7结构: ' + (data.getBoolean('formed') ? '§a已成型' : '§c未成型')))
            tooltip.add(Component.literal('§7状态: §f' + data.getString('state')))
            tooltip.add(Component.literal('§7速度效率: §b' + Number(data.getFloat('speed')).toFixed(2) + 'x'))
            tooltip.add(Component.literal('§7并行数: §b' + data.getInt('parallel')))
            tooltip.add(Component.literal('§7耗电效率: §b' + data.getInt('energyPerTick') + ' FE/t'))
        })
})