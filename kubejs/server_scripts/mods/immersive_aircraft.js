function loadAircraftRecipes (event) {
    event.remove({output: 'immersive_aircraft:hull'});
    event.remove({output: 'immersive_aircraft:engine'});
    event.remove({output: 'immersive_aircraft:sail'});
    event.remove({output: 'immersive_aircraft:propeller'});
    event.remove({output: 'immersive_aircraft:boiler'});
    event.remove({output: 'immersive_aircraft:steel_boiler'});
    event.remove({output: 'immersive_aircraft:improved_landing_gear'});
    event.remove({output: 'immersive_aircraft:gyroscope'});
    event.remove({output: 'immersive_aircraft:sturdy_pipes'});
    event.remove({output: 'immersive_aircraft:industrial_gears'});
    event.remove({output: 'immersive_aircraft:enhanced_propeller'});
    event.remove({output: 'immersive_aircraft:rotary_cannon'});
    event.remove({output: 'immersive_aircraft:bomb_bay'});
    event.remove({output: 'immersive_aircraft:biplane'});
    event.remove({output: 'immersive_aircraft:gyrodyne'});
    event.remove({output: 'immersive_aircraft:airship'});
    event.remove({output: 'immersive_aircraft:cargo_airship'});

    /*
    event.shaped('immersive_aircraft:',[
        '   ',
        '   ',
        '   ',
    ], {
        D: ' '
    })
    */

    event.shaped('immersive_aircraft:quadrocopter',[
        'PIP',
        'IEI',
        'PIP',
    ], {
        I: '#forge:rods/wooden',
        P: 'immersive_aircraft:propeller',
        E: 'immersive_aircraft:engine'
    })

    event.shaped('kubejs:airplane_hull',[
        'NNN',
        'OVO',
        'NNN',
    ], {
        V: 'kubejs:wood_veneer',
        O: '#forge:wires/aluminum',
        N: '#forge:plates/aluminum',
    })

    event.shaped('kubejs:airplane_engine',[
        'PRP',
        'RCR',
        'PXP',
    ], {
        P: '#forge:plates/steel',
        C: 'immersive_aircraft:boiler',
        X: 'immersivepetroleum:lubricant_bucket',
        R: '#forge:rods/steel'
    })

    event.shaped('immersive_aircraft:sail',[
        'CC ',
        'CC ',
        'CC ',
    ], {
        C: '#forge:fabric_hemp'
    })

    event.shaped('immersive_aircraft:propeller',[
        'PP ',
        ' C ',
        ' PP',
    ], {
        P: '#forge:plates/aluminum',
        C: '#forge:ingots/aluminum'
    })

    event.shaped('immersive_aircraft:boiler',[
        'CCC',
        'C C',
        'CXC',
    ], {
        C: '#forge:plates/copper',
        X: 'minecraft:furnace'
    })

    event.shaped('immersive_aircraft:hull',[
        'AAA',
        'PPP',
        'AAA',
    ], {
        A: '#forge:plates/aluminum',
        P: '#minecraft:planks'
    })

    event.shaped('immersive_aircraft:engine',[
        'PGP',
        'PIP',
        'PBP',
    ], {
        P: '#forge:plates/aluminum',
        B: 'immersive_aircraft:boiler',
        I: '#forge:rods/iron',
        G: '#forge:ingots/iron'
    })

    event.shaped('immersive_aircraft:enhanced_propeller',[
        'C  ',
        'COC',
        '  C',
    ], {
        C: '#forge:plates/constantan',
        O: 'immersive_aircraft:propeller'
    })

    event.shaped('immersive_aircraft:bomb_bay',[
        ' F ',
        'TNT',
        'T T',
    ], {
        T: '#forge:ingots/iron',
        N: 'minecraft:tnt',
        F: 'minecraft:flint_and_steel'
    })

    event.shaped('immersive_aircraft:steel_boiler',[
        ' O ',
        'OXO',
        ' O ',
    ], {
        O: '#forge:plates/steel',
        X: 'immersive_aircraft:boiler'
    })

    event.shaped('immersive_aircraft:sturdy_pipes',[
        '  I',
        'III',
        'I  ',
    ], {
        I: 'immersiveengineering:fluid_pipe'
    })

    event.shaped('immersive_aircraft:improved_landing_gear',[
        ' I ',
        'LLI',
        'LL ',
    ], {
        L: '#forge:leather',
        I: '#forge:rods/all_metal'
    })

    event.shaped('immersive_aircraft:gyroscope',[
        ' X ',
        ' O ',
        ' I ',
    ], {
        O: 'immersiveengineering:component_electronic',
        X: 'minecraft:comparator',
        I: 'immersiveengineering:wirecoil_copper'
    })

    event.shaped('immersive_aircraft:industrial_gears',[
        'IA ',
        'BI ',
        '   ',
    ], {
        A: 'immersiveengineering:component_steel',
        I: '#forge:rods/all_metal',
        B: 'immersiveengineering:component_iron'
    })

    //TODO: Compat with Multiblocks
}
