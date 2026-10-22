StartupEvents.registry('item', event => {
  event.create('sky_dust_grower', 'neoecoprototype:storage_matrix')
       .itemType('ae2:sky_dust')
       .grows(256, 60)
       .displayName('陨石粉自产矩阵')

  event.create('firmament_dust_grower', 'neoecoprototype:storage_matrix')
       .itemType('ae2lt:firmament_dust')
       .grows(128, 60)
       .displayName('苍穹粉自产矩阵')
})