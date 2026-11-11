ServerEvents.recipes(event => {
    event.shaped(
        'mbd2:frame_sandblaster', // 输出：框架喷砂机
        [
            'AFA',
            'BCD',
            'AEA'
        ],
        {
            A: 'ae2omnicells:ender_ingot',              // 末影钢锭
            B: 'dimstorage:dimensional_chest',          // 维度箱子
            C: 'mekanism:ultimate_crushing_factory',    // 终极粉碎工厂
            D: 'dimstorage:dimensional_tank',           // 维度储罐
            E: 'mekanism:dimensional_stabilizer',       // 维度稳定锚
            F: 'ae2cs:resonating_processor'             // 谐振处理器
        }
    ).id('kubejs:frame_sandblaster')
})