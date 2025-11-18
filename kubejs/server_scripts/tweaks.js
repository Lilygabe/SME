

function loadTweakedRecipes(event) {
	event.shapeless('4x minecraft:clay_ball', 'minecraft:clay')
	
	event.remove({output: 'sophisticatedbackpacks:backpack'})
	event.shaped('sophisticatedbackpacks:backpack',[
		'HLH',
		'HOH',
		'LLL',
	], {
		O: 'immersiveengineering:crate',
		L: '#forge:leather',
		H: '#forge:fiber_hemp'
	})

	event.remove({output: 'controlengineering:oscilloscope'})
	event.shaped('controlengineering:oscilloscope',[
		'AAA',
		'CBT',
		'AAA',
	], {
		A: 'immersiveengineering:plate_aluminum',
		C: 'controlengineering:crt_tube',
		B: 'immersiveengineering:component_electronic',
		T: 'controlengineering:bus_relay'
	})
}

function loadCompactedRecipes (event) {
	event.shaped('minecraft:bread',[
		' W ',
		'WW ',
		'   ',
	], {
		W: 'minecraft:wheat'
	})
	event.shaped('minecraft:bread',[
		'WW ',
		'W  ',
		'   ',
	], {
		W: 'minecraft:wheat'
	})
	
	event.shaped('3x minecraft:paper',[
		' C ',
		'CC ',
		'   ',
	], {
		C: 'minecraft:sugar_cane'
	})
	event.shaped('3x minecraft:paper',[
		'CC ',
		'C  ',
		'   ',
	], {
		C: 'minecraft:sugar_cane'
	})
}

function loadOtherRecipes (event) {
	event.smelting('minecraft:charcoal', 'minecraft:rotten_flesh');
	
	// kubejs items
	event.smelting("kubejs:dry_dirt", "minecraft:dirt")
	event.smelting("minecraft:gravel", "kubejs:dry_dirt")

	event.custom({"type":"immersiveengineering:crusher",
		"energy":1600,
		"input": {
			"item": "kubejs:dry_dirt"
		},
		"result": {
			"count": 1,
			"item": "kubejs:clay_dust"
		},
		"secondaries": [{
			"chance":0.2,
			"output": {
				"item": "kubejs:clay_dust"
			}
		}]
	})
	
	event.custom({"type":"immersiveengineering:bottling_machine",
		"results":[{"item":"minecraft:clay_ball"}],
		"input":{"item":"kubejs:clay_dust"},
		"fluid":{
			"tag":"minecraft:water",
			"amount":250
		}
	})

	event.custom({
		'type': 'immersiveengineering:shapeless_fluid',
		'ingredients': [
		{'tag': 'minecraft:planks'},
		{
			'type': 'immersiveengineering:fluid',
			'amount': 1000,
			'tag': 'forge:phenolic_resin'
		}],
		'result': {
			'item': 'kubejs:wood_veneer',
			'count': 8
		}
	})
}
