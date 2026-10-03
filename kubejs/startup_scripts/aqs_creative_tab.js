// AQS 统一创造模式标签页：收集 MBD2 与 KubeJS 的物品。
const AQS_HIDDEN_ITEMS = [
    'kubejs:3x3_input_assembly',
    'kubejs:3x3_output_assembly',
    'kubejs:apothsis_slayer_factory',
    'kubejs:seed_breeder',
    'kubejs:seed_breeder_2',
    'kubejs:amethyst_growth_accelerator',
    'kubejs:earth_blast_furnace_controller'
]

// 只改变提示框中的显示模组名，不改变物品的真实 registry ID。
Platform.setModName('mbd2', 'AQS')
Platform.setModName('kubejs', 'AQS')

StartupEvents.registry('creative_mode_tab', event => {
    event.create('aqs')
        .displayName('AQS')
        .icon(() => 'minecraft:nether_star')
        .content(() => Ingredient.of(['@mbd2', '@kubejs']))
})

// JEI 的 hide.js 不会自动影响创造标签页，因此在 AQS 标签页单独排除相同物品。
StartupEvents.modifyCreativeTab('aqs:aqs', event => {
    event.remove(AQS_HIDDEN_ITEMS)
})