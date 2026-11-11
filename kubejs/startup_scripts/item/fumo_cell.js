StartupEvents.registry('item', event => {
    const fumos = [
        'extendedae:fishbig',
        'extendedae:mddyue',
        'extendedae_plus:c-h716',
        'extendedae_plus:fish_dan_',
        'ae2lt:moakiee_fumo',
        'ae2lt:cystrysu_fumo',
        'mekmm:author_doll',
        'mekmm:modeler_doll',
        'neoecoprototype:fumo_doll_reliqwq',
        'neoecoprototype:fumo_doll_yang120',
        'neoecoprototype:fumo_doll_kouooki',
        'neoecoprototype:fumo_doll_tedxenon'
    ]

    event.create('infinities_fumo_cell', 'meinfinitycell:infinities_cell')
        .setName(Text.literal('fumo'))
        .setKeys(KeyList.create().adds(keys => {
            fumos.forEach(id => {
                keys.add(AEKeyHelper.item(id))
            })
        }))
        .texture('extendedae:item/infinity_cell')

})