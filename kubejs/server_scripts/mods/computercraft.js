function loadCCRecipes(event){
	event.remove({output: 'computercraft:computer_normal'})
	event.remove({output: 'computercraft:computer_advanced'})
	
	event.remove({output: 'computercraft:monitor_normal'})
	event.remove({output: 'computercraft:monitor_advanced'})
	
	event.remove({output: 'computercraft:pocket_computer_normal'})
	event.remove({output: 'computercraft:pocket_computer_advanced'})
	
	event.remove({output: 'computercraft:turtle_normal'})
	event.remove({output: 'computercraft:turtle_advanced'})
	
	event.remove({output: 'computercraft:wireless_modem_advanced'})
	
	event.shaped('computercraft:computer_normal',[
		'AEA',
		'CLC',
		'ABA',
	], {
		A: 'immersiveengineering:plate_aluminum',
		B: 'minecraft:stone_button',
		C: 'minecraft:glass_pane',
		E: 'immersiveengineering:component_electronic_adv',
		L: 'controlengineering:crt_tube'
	})
	
	event.shaped('computercraft:computer_advanced',[
		'AEA',
		'GBG',
		'ACA',
	], {
		A: 'immersiveengineering:plate_gold',
		B: 'computercraft:computer_normal',
		C: 'immersiveengineering:wirecoil_redstone',
		E: 'immersiveengineering:component_electronic_adv',
		G: 'minecraft:glowstone_dust'
	})
	
	event.shaped('4x computercraft:monitor_normal',[
		'AAA',
		'CLC',
		'AAA',
	], {
		A: 'immersiveengineering:plate_aluminum',
		C: 'minecraft:glass_pane',
		L: 'controlengineering:crt_tube'
	})
	
	event.shaped('2x computercraft:monitor_advanced',[
		'AAA',
		'GMG',
		'AAA',
	], {
		A: 'immersiveengineering:plate_gold',
		M: 'computercraft:monitor_normal',
		G: 'minecraft:glowstone_dust'
	})
	
	//TODO: Temporary recipes for pocket computers
	event.recipes.immersiveengineeringMetalPress(
		"computercraft:pocket_computer_normal", "computercraft:computer_normal", 
	"immersiveengineering:mold_plate")
	event.recipes.immersiveengineeringMetalPress(
		"computercraft:pocket_computer_advanced", "computercraft:computer_advanced", 
	"immersiveengineering:mold_plate")

}
