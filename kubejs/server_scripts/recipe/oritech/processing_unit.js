ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('oritech:processing_unit'), 
        [                                               
            'ae2cs:simple_processor',
            'ae2:calculation_processor',
            'ae2:logic_processor',
            'ae2:engineering_processor'
        ]
    )
})