ServerEvents.recipes(event => {
    event.shaped(
        Item.of('ad_astra:desh_block'), 
        [                                               
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'ad_astra:desh_ingot',  
            B: 'mekanism:cardboard_box[mekanism:block_data={block_entity_tag:{bc_managed_data:{anim_extract_state:0.0d,component_position0:[I;0,0,0],component_position1:[I;0,0,0],component_position2:[I;0,0,0],component_position3:[I;0,0,0],component_position4:[I;0,0,0],component_position5:[I;0,0,0],converted_fuel:0.0d,explosion_countdown:-1,fail_safe_mode:0b,field_drain:0,field_input_rate:0.0d,fuel_use_rate:0.0d,generation_rate:0.0d,max_saturation:0L,max_shield_charge:0.0d,reactable_fuel:0.0d,reactor_state:{value:0b},saturation:0L,shader_animation_state:0.0d,shield_charge:0.0d,stabilizer_axis:{value:1b},startup_initialized:0b,structure_error:"",structure_valid:0b,temp_drain_factor:0.0d,temperature:20.0d},id:"draconicevolution:reactor_core",x:-54,y:253,z:-66},state:{Name:"draconicevolution:reactor_core"}}]',                         
        }
    )
})