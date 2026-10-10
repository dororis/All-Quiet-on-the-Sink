ServerEvents.recipes(event => {
    event.shaped(
        Item.of('molecularmanipulator:matter_fabrication_controller'), 
        [                                               
            'FDF',
            'ABD',
            'FDF'
        ],
        {
            A:'neoecoae:crafting_system_l9',
            B:'ae2lt:pigmee_synthesis_station',  
            D:'ae2lt:matter_warping_matrix_overload_main_core',
            F:'ae2lt:pigmee_molecular_assembler'                         
        }
    )
})