ServerEvents.recipes(event => {
    event.shaped(
        Item.of('molecularmanipulator:matter_fabrication_controller'), 
        [                                               
            'ABC',
            'BFB',
            'DBE'
        ],
        {
            A:'neoecoae:crafting_system_l9',  
            B:'powahaddon:crystal_galaxy',
            C:'neoecoae:computation_system_l9',
            D:'ae2lt:matter_warping_matrix_overload_main_core',
            E:'ae2lt:tianshu_overload_main_core',
            F:'ae2lt:pigmee_molecular_assembler'                         
        }
    )
})