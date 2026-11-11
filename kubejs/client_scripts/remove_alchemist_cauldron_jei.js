RecipeViewerEvents.removeCategories(event => {
    // 隐藏 Iron's Spellbooks 炼金锅的整个 JEI 分类，包括动态生成的卷轴与药水条目
    event.remove(['irons_spellbooks:alchemist_cauldron'])
})