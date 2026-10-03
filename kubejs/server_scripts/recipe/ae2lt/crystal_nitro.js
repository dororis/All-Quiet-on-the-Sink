ServerEvents.recipes(event => {
    event.custom(
    {
    "type": "ae2lt:crystal_catalyzer",
    "catalyst": {
    "item": "mekanism_extras:alloy_thermonuclear"
    },
    "catalystCount": 32,
    "output": {
    "id": "powah:crystal_nitro",
    "count": 1
    },
    "energyPerCycle": 100000,
    "lightningCost": 1,
    "lightningTier": "high_voltage"
    })
    event.custom(
    {
    "type": "ae2lt:crystal_catalyzer",
    "catalyst": {
    "item": "mekanism_extras:alloy_shining"
    },
    "catalystCount": 64,
    "output": {
    "id": "powahaddon:crystal_radiant",
    "count": 1
    },
    "energyPerCycle": 1000000,
    "lightningCost": 1,
    "lightningTier": "high_voltage"
    })
    event.custom(
    {
    "type": "ae2lt:crystal_catalyzer",
    "catalyst": {
    "item": "mekanism_extras:alloy_spectrum"
    },
    "catalystCount": 128,
    "output": {
    "id": "powahaddon:crystal_astral",
    "count": 1
    },
    "energyPerCycle": 10000000,
    "lightningCost": 1,
    "lightningTier": "high_voltage"
    })
    event.custom(
    {
    "type": "ae2lt:crystal_catalyzer",
    "catalyst": {
    "item": "mekanismsun:supernova_alloy"
    },
    "catalystCount": 256,
    "output": {
    "id": "powahaddon:crystal_galaxy",
    "count": 1
    },
    "energyPerCycle": 100000,
    "lightningCost": 1,
    "lightningTier": "high_voltage"
    })
})