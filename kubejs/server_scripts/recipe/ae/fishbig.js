ServerEvents.recipes(event => {
    event.shaped(
        Item.of('extendedae:fishbig'), 
        [                                               
            'BCD',
            'EAF',
            'GHI'
        ],
        {  
            A: 'minecraft:pufferfish',
            B:'ae2lt:pigmee_storage_cell',
            C:'extendedae_plus:infinity_biginteger_cell',
            D:'enderdrives:ender_disk_creative',
            E:'ae2omnicells:creative_ae_cell_biginteger',
            F:'ae2omnicells:creative_ae_cell_long',
            G:'ae2lt:infinite_storage_cell',
            H:'ae2lt:mysterious_cell[custom_data={CellType:1b}]',
            I:'ae2lt:mysterious_cell[custom_data={CellType:3b}]'                         
        }
    )
})