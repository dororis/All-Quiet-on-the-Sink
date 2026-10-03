ServerEvents.recipes(event => {
  AE2Recipes.inscriber(
    event,
    'inscribe',                    // 'inscribe' | 'press' 等
    'apotheosis:timeworn_fabric',              // 例如: 'ae2:printed_silicon'
    'alltheores:steel_plate',              // 例如: 'ae2:redstone'，可为 null
    'ae2:printed_silicon',              // 可为 null
    'oritech:reinforced_carbon_sheet',              // 例如: 'ae2:logic_processor'
    'kubejs:inscribe/reinforced_carbon_sheet'            // 可选
  )
})