function loadDelighfulRecipes (event){
    //TODO: Fluids and their recipes

    // Cake Slices
    var unpk = "immersiveengineering:mold_unpacking"
    event.recipes.immersiveengineeringMetalPress("7x farmersdelight:cake_slice", "minecraft:cake", unpk)
    event.recipes.immersiveengineeringMetalPress("4x farmersdelight:apple_pie_slice", "farmersdelight:apple_pie", unpk)
    event.recipes.immersiveengineeringMetalPress("4x farmersdelight:sweet_berry_cheesecake_slice", "farmersdelight:sweet_berry_cheesecake", unpk)
    event.recipes.immersiveengineeringMetalPress("4x farmersdelight:chocolate_pie_slice", "farmersdelight:chocolate_pie", unpk)

    event.recipes.immersiveengineeringMetalPress("7x farmersrespite:coffee_cake_slice", "farmersrespite:coffee_cake", unpk)
    event.recipes.immersiveengineeringMetalPress("4x farmersrespite:rose_hip_pie_slice", "farmersrespite:rose_hip_pie", unpk)

    event.recipes.immersiveengineeringMetalPress("4x brewinandchewin:quiche_slice", "brewinandchewin:quiche", unpk)
    event.recipes.immersiveengineeringMetalPress("4x brewinandchewin:pizza_slice", "brewinandchewin:pizza", unpk)
    event.recipes.immersiveengineeringMetalPress("4x brewinandchewin:flaxen_cheese_wedge", "brewinandchewin:flaxen_cheese_wheel", unpk)
    event.recipes.immersiveengineeringMetalPress("4x brewinandchewin:scarlet_cheese_wedge", "brewinandchewin:scarlet_cheese_wheel", unpk)

    // Pasta
    event.recipes.immersiveengineeringMetalPress("2x farmersdelight:raw_pasta", "farmersdelight:wheat_dough", "immersiveengineering:mold_wire")

    // Cloche
    var cr = new customRecipes(event)
    var soil = "farmersdelight:rich_soil"

    cr.ieCloche("immersiveengineering:seed", cr.itemListOf("2x immersiveengineering:hemp_fiber, 2x immersiveengineering:seed"), soil, 800, "hemp", "immersiveengineering:hemp")

    cr.ieCloche("minecraft:beetroot_seeds", cr.itemListOf("4x minecraft:beetroot, minecraft:beetroot_seeds"), soil, 800, "crop", "minecraft:beetroots")
    cr.ieCloche("minecraft:potato", cr.itemListOf("4x minecraft:potato"), soil, 800, "crop", "minecraft:potatoes")
    cr.ieCloche("minecraft:carrot", cr.itemListOf("4x minecraft:carrot"), soil, 800, "crop", "minecraft:carrots")
    cr.ieCloche("minecraft:wheat_seeds", cr.itemListOf("4x minecraft:wheat, 2x minecraft:wheat_seeds"), soil, 640, "crop", "minecraft:wheat")
    cr.ieCloche("minecraft:sweet_berries", cr.itemListOf("4x minecraft:sweet_berries"), soil, 640, "crop", "minecraft:sweet_berry_bush")
    cr.ieCloche("minecraft:melon_seeds", cr.itemListOf("2x minecraft:melon"), soil, 800, "stem", "minecraft:melon")
    cr.ieCloche("minecraft:pumpkin_seeds", cr.itemListOf("2x minecraft:pumpkin"), soil, 800, "stem", "minecraft:pumpkin")

    cr.ieCloche("farmersdelight:cabbage_seeds", cr.itemListOf("4x farmersdelight:cabbage, farmersdelight:cabbage_seeds"), soil, 800, "crop", "farmersdelight:cabbages")
    cr.ieCloche("farmersdelight:onion", cr.itemListOf("4x farmersdelight:onion"), soil, 800, "crop", "farmersdelight:onions")
    cr.ieCloche("farmersdelight:rice", cr.itemListOf("4x farmersdelight:rice_panicle"), soil, 800, "crop", "farmersdelight:rice_panicles")
    cr.ieCloche("farmersdelight:tomato_seeds", cr.itemListOf("4x farmersdelight:tomato"), soil, 800, "crop", "farmersdelight:tomatoes")
}
