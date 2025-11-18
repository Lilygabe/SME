/*
StartupEvents.registry('block', event =>{
	event.create('biplane_engine')
})
*/

function regCustomItems(event){
	//credit: the texture for clay dust is by the creators of Tech Reborn.
	event.create('clay_dust')
		.displayName('Clay Dust')

	event.create('airplane_hull')
		.displayName('Airplane Hull')

	event.create('airplane_engine')
		.displayName('Airplane Engine')

	event.create('wood_veneer')
		.displayName('Eco Friendly Wood Veneer')
}

function regCustomBlocks(event){
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
	event.create('dry_dirt')
		.displayName('Dry Dirt')
		.soundType('sand')
		.material('sand')
    	.hardness(0.6)
    	.tagBlock('minecraft:mineable/shovel')
		.textureAll('kubejs:block/clay_dust')

	event.create('biplane_engine')
		.displayName("Biplane Engine")
		.soundType('stone')
		.material('metal')
		.hardness(3.0)
		.requiresTool(true)
		.tagBlock('minecraft:mineable/pickaxe')
		.property(BlockProperties.FACING)
		.placementState(state => {
			const face = state.clickedFace ?? state.horizontalDirection
			state.setValue(BlockProperties.FACING, face)
		})
		.model('kubejs:block/biplane_engine')
}
