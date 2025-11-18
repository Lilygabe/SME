function loadAE2Recipes(event){
	let cr = new customRecipes(event);

	cr.ieCrusher("ae2:certus_quartz_dust", "#ae2:all_certus_quartz")
	cr.ieCrusher("ae2:fluix_dust", "ae2:fluix_crystal")
	cr.ieCrusher("ae2:sky_dust", "ae2:sky_stone_block")
	cr.ieCrusher("ae2:ender_dust", "minecraft:ender_pearl")
}

function modAE2BlockTags(event){
	const skyStoneBlocks = [
		"sky_stone_block", "smooth_sky_stone_block", "sky_stone_brick", "sky_stone_small_brick",
		"sky_stone_chest", "smooth_sky_stone_chest", "sky_stone_tank", "sky_stone_stairs",
		"smooth_sky_stone_stairs", "sky_stone_brick_stairs", "sky_stone_small_brick_stairs",
		"sky_stone_wall", "smooth_sky_stone_wall", "sky_stone_brick_wall",
		"sky_stone_small_brick_wall", "sky_stone_slab", "smooth_sky_stone_slab",
		"sky_stone_brick_slab", "sky_stone_small_brick_slab"
	];
	
	skyStoneBlocks.forEach((e) => {
        e = "ae2:" + e;
		// event.remove('minecraft:needs_iron_tool',e)
        event.add('minecraft:needs_diamond_tool',e)
    });
}
