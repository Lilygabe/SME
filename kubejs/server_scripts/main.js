// priority: 0

ServerEvents.recipes(event => {
	loadTweakedRecipes(event);
	loadCompactedRecipes(event);
	loadOtherRecipes(event);
	loadAircraftRecipes(event);
	//loadCCRecipes(event);
	//loadAE2Recipes(event);
	loadDelighfulRecipes(event);
})

ServerEvents.tags('block', event => {
	//modAE2BlockTags(event)
})
