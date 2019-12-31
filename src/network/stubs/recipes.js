export default [
    {
        "id": "accumulator",
        "name": "Accumulator",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Accumulator",
        "category": "Production",
        "recipe": {
            "time": 10,
            "yield": 1,
            "ingredients": [
                {
                    "id": "battery",
                    "amount": 5
                },
                {
                    "id": "iron-plate",
                    "amount": 2
                }
            ]
        }
    },
    {
        "id": "logistic-chest-active-provider",
        "name": "Active provider chest",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Active_provider_chest",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "advanced-circuit",
                    "amount": 1
                },
                {
                    "id": "electronic-circuit",
                    "amount": 3
                },
                {
                    "id": "steel-chest",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "advanced-circuit",
        "name": "Advanced circuit",
        "type": "Intermediate product",
        "wiki_link": "https://wiki.factorio.com/Advanced_circuit",
        "category": "Intermediate product",
        "recipe": {
            "time": 6,
            "yield": 1,
            "ingredients": [
                {
                    "id": "copper-cable",
                    "amount": 4
                },
                {
                    "id": "electronic-circuit",
                    "amount": 2
                },
                {
                    "id": "plastic-bar",
                    "amount": 2
                }
            ]
        }
    },
    {
        "id": "arithmetic-combinator",
        "name": "Arithmetic combinator",
        "type": "Logic",
        "wiki_link": "https://wiki.factorio.com/Arithmetic_combinator",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "copper-cable",
                    "amount": 5
                },
                {
                    "id": "electronic-circuit",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "artillery-shell",
        "name": "Artillery shell",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Artillery_shell",
        "category": "Combat",
        "recipe": {
            "time": 15,
            "yield": 1,
            "ingredients": [
                {
                    "id": "explosive-cannon-shell",
                    "amount": 4
                },
                {
                    "id": "explosives",
                    "amount": 8
                },
                {
                    "id": "radar",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "artillery-targeting-remote",
        "name": "Artillery targeting remote",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Artillery_targeting_remote",
        "category": "Combat",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "processing-unit",
                    "amount": 1
                },
                {
                    "id": "radar",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "artillery-turret",
        "name": "Artillery turret",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Artillery_turret",
        "category": "Combat",
        "recipe": {
            "time": 40,
            "yield": 1,
            "ingredients": [
                {
                    "id": "advanced-circuit",
                    "amount": 20
                },
                {
                    "id": "concrete",
                    "amount": 60
                },
                {
                    "id": "iron-gear-wheel",
                    "amount": 40
                },
                {
                    "id": "steel-plate",
                    "amount": 60
                }
            ]
        }
    },
    {
        "id": "artillery-wagon",
        "name": "Artillery wagon",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Artillery_wagon",
        "category": "Logistics",
        "recipe": {
            "time": 4,
            "yield": 1,
            "ingredients": [
                {
                    "id": "advanced-circuit",
                    "amount": 20
                },
                {
                    "id": "engine-unit",
                    "amount": 64
                },
                {
                    "id": "iron-gear-wheel",
                    "amount": 10
                },
                {
                    "id": "pipe",
                    "amount": 16
                },
                {
                    "id": "steel-plate",
                    "amount": 40
                }
            ]
        }
    },
    {
        "id": "assembling-machine-1",
        "name": "Assembling machine 1",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Assembling_machine_1",
        "category": "Production",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "electronic-circuit",
                    "amount": 3
                },
                {
                    "id": "iron-gear-wheel",
                    "amount": 5
                },
                {
                    "id": "iron-plate",
                    "amount": 9
                }
            ]
        }
    },
    {
        "id": "assembling-machine-2",
        "name": "Assembling machine 2",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Assembling_machine_2",
        "category": "Production",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "assembling-machine-1",
                    "amount": 1
                },
                {
                    "id": "electronic-circuit",
                    "amount": 3
                },
                {
                    "id": "iron-gear-wheel",
                    "amount": 5
                },
                {
                    "id": "iron-plate",
                    "amount": 9
                }
            ]
        }
    },
    {
        "id": "assembling-machine-3",
        "name": "Assembling machine 3",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Assembling_machine_3",
        "category": "Production",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "assembling-machine-2",
                    "amount": 2
                },
                {
                    "id": "speed-module",
                    "amount": 4
                }
            ]
        }
    },
    {
        "id": "atomic-bomb",
        "name": "Atomic bomb",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Atomic_bomb",
        "category": "Combat",
        "recipe": {
            "time": 50,
            "yield": 1,
            "ingredients": [
                {
                    "id": "explosives",
                    "amount": 10
                },
                {
                    "id": "processing-unit",
                    "amount": 20
                },
                {
                    "id": "uranium-235",
                    "amount": 30
                }
            ]
        }
    },
    {
        "id": "battery",
        "name": "Battery",
        "type": "Intermediate product",
        "wiki_link": "https://wiki.factorio.com/Battery",
        "category": "Intermediate product",
        "recipe": {
            "time": 5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "copper-plate",
                    "amount": 1
                },
                {
                    "id": "iron-plate",
                    "amount": 1
                },
                {
                    "id": "sulfuric-acid",
                    "amount": 20
                }
            ]
        }
    },
    {
        "id": "battery-mk1",
        "name": "Battery MK1",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Battery_MK1",
        "category": "Combat",
        "recipe": {
            "time": 10,
            "yield": 1,
            "ingredients": [
                {
                    "id": "battery",
                    "amount": 5
                },
                {
                    "id": "steel-plate",
                    "amount": 10
                }
            ]
        }
    },
    {
        "id": "battery-mk2",
        "name": "Battery MK2",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Battery_MK2",
        "category": "Combat",
        "recipe": {
            "time": 10,
            "yield": 1,
            "ingredients": [
                {
                    "id": "battery-mk1",
                    "amount": 10
                },
                {
                    "id": "processing-unit",
                    "amount": 20
                }
            ]
        }
    },
    {
        "id": "beacon",
        "name": "Beacon",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Beacon",
        "category": "Logistics",
        "recipe": {
            "time": 15,
            "yield": 1,
            "ingredients": [
                {
                    "id": "advanced-circuit",
                    "amount": 20
                },
                {
                    "id": "copper-cable",
                    "amount": 10
                },
                {
                    "id": "electronic-circuit",
                    "amount": 20
                },
                {
                    "id": "steel-plate",
                    "amount": 10
                }
            ]
        }
    },
    {
        "id": "big-electric-pole",
        "name": "Big electric pole",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Big_electric_pole",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "copper-plate",
                    "amount": 5
                },
                {
                    "id": "steel-plate",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "blueprint",
        "name": "Blueprint",
        "type": "Tool",
        "wiki_link": "https://wiki.factorio.com/Blueprint",
        "category": "Production",
        "recipe": {
            "time": null,
            "yield": null,
            "ingredients": []
        }
    },
    {
        "id": "blueprint-book",
        "name": "Blueprint book",
        "type": "Tool",
        "wiki_link": "https://wiki.factorio.com/Blueprint_book",
        "category": "Production",
        "recipe": {
            "time": null,
            "yield": null,
            "ingredients": []
        }
    },
    {
        "id": "boiler",
        "name": "Boiler",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Boiler",
        "category": "Production",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "pipe",
                    "amount": 4
                },
                {
                    "id": "stone-furnace",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "logistic-chest-buffer",
        "name": "Buffer chest",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Buffer_chest",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "advanced-circuit",
                    "amount": 1
                },
                {
                    "id": "electronic-circuit",
                    "amount": 3
                },
                {
                    "id": "steel-chest",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "burner-inserter",
        "name": "Burner inserter",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Burner_inserter",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "iron-gear-wheel",
                    "amount": 1
                },
                {
                    "id": "iron-plate",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "burner-mining-drill",
        "name": "Burner mining drill",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Burner_mining_drill",
        "category": "Production",
        "recipe": {
            "time": 4,
            "yield": 1,
            "ingredients": [
                {
                    "id": "iron-gear-wheel",
                    "amount": 3
                },
                {
                    "id": "iron-plate",
                    "amount": 3
                },
                {
                    "id": "stone-furnace",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "cannon-shell",
        "name": "Cannon shell",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Cannon_shell",
        "category": "Combat",
        "recipe": {
            "time": 8,
            "yield": 1,
            "ingredients": [
                {
                    "id": "explosives",
                    "amount": 1
                },
                {
                    "id": "plastic-bar",
                    "amount": 2
                },
                {
                    "id": "steel-plate",
                    "amount": 2
                }
            ]
        }
    },
    {
        "id": "car",
        "name": "Car",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Car",
        "category": "Logistics",
        "recipe": {
            "time": 2,
            "yield": 1,
            "ingredients": [
                {
                    "id": "engine-unit",
                    "amount": 8
                },
                {
                    "id": "iron-plate",
                    "amount": 20
                },
                {
                    "id": "steel-plate",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "cargo-wagon",
        "name": "Cargo wagon",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Cargo_wagon",
        "category": "Logistics",
        "recipe": {
            "time": 1,
            "yield": 1,
            "ingredients": [
                {
                    "id": "iron-gear-wheel",
                    "amount": 10
                },
                {
                    "id": "iron-plate",
                    "amount": 20
                },
                {
                    "id": "steel-plate",
                    "amount": 20
                }
            ]
        }
    },
    {
        "id": "centrifuge",
        "name": "Centrifuge",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Centrifuge",
        "category": "Production",
        "recipe": {
            "time": 4,
            "yield": 1,
            "ingredients": [
                {
                    "id": "advanced-circuit",
                    "amount": 100
                },
                {
                    "id": "concrete",
                    "amount": 100
                },
                {
                    "id": "iron-gear-wheel",
                    "amount": 100
                },
                {
                    "id": "steel-plate",
                    "amount": 50
                }
            ]
        }
    },
    {
        "id": "chemical-plant",
        "name": "Chemical plant",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Chemical_plant",
        "category": "Production",
        "recipe": {
            "time": 5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "electronic-circuit",
                    "amount": 5
                },
                {
                    "id": "iron-gear-wheel",
                    "amount": 5
                },
                {
                    "id": "pipe",
                    "amount": 5
                },
                {
                    "id": "steel-plate",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "cliff-explosives",
        "name": "Cliff explosives",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Cliff_explosives",
        "category": "Logistics",
        "recipe": {
            "time": 8,
            "yield": 1,
            "ingredients": [
                {
                    "id": "empty-barrel",
                    "amount": 1
                },
                {
                    "id": "explosives",
                    "amount": 10
                },
                {
                    "id": "grenade",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "cluster-grenade",
        "name": "Cluster grenade",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Cluster_grenade",
        "category": "Combat",
        "recipe": {
            "time": 8,
            "yield": 1,
            "ingredients": [
                {
                    "id": "explosives",
                    "amount": 5
                },
                {
                    "id": "grenade",
                    "amount": 7
                },
                {
                    "id": "steel-plate",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "coal",
        "name": "Coal",
        "type": "Resource",
        "wiki_link": "https://wiki.factorio.com/Coal",
        "category": "Intermediate product",
        "recipe": {
            "time": null,
            "yield": null,
            "ingredients": []
        }
    },
    {
        "id": "combat-shotgun",
        "name": "Combat shotgun",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Combat_shotgun",
        "category": "Combat",
        "recipe": {
            "time": 10,
            "yield": 1,
            "ingredients": [
                {
                    "id": "copper-plate",
                    "amount": 10
                },
                {
                    "id": "iron-gear-wheel",
                    "amount": 5
                },
                {
                    "id": "steel-plate",
                    "amount": 15
                },
                {
                    "id": "wood",
                    "amount": 10
                }
            ]
        }
    },
    {
        "id": "concrete",
        "name": "Concrete",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Concrete",
        "category": "Logistics",
        "recipe": {
            "time": 10,
            "yield": 10,
            "ingredients": [
                {
                    "id": "iron-ore",
                    "amount": 1
                },
                {
                    "id": "stone-brick",
                    "amount": 5
                },
                {
                    "id": "water",
                    "amount": 100
                }
            ]
        }
    },
    {
        "id": "constant-combinator",
        "name": "Constant combinator",
        "type": "Logic",
        "wiki_link": "https://wiki.factorio.com/Constant_combinator",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "copper-cable",
                    "amount": 5
                },
                {
                    "id": "electronic-circuit",
                    "amount": 2
                }
            ]
        }
    },
    {
        "id": "construction-robot",
        "name": "Construction robot",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Construction_robot",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "electronic-circuit",
                    "amount": 2
                },
                {
                    "id": "flying-robot-frame",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "copper-cable",
        "name": "Copper cable",
        "type": "Intermediate product",
        "wiki_link": "https://wiki.factorio.com/Copper_cable",
        "category": "Intermediate product",
        "recipe": {
            "time": 0.5,
            "yield": 2,
            "ingredients": [
                {
                    "id": "copper-plate",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "copper-ore",
        "name": "Copper ore",
        "type": "Resource",
        "wiki_link": "https://wiki.factorio.com/Copper_ore",
        "category": "Intermediate product",
        "recipe": {
            "time": null,
            "yield": null,
            "ingredients": []
        }
    },
    {
        "id": "copper-plate",
        "name": "Copper plate",
        "type": "Intermediate product",
        "wiki_link": "https://wiki.factorio.com/Copper_plate",
        "category": "Intermediate product",
        "recipe": {
            "time": 3.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "copper-ore",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "crude-oil",
        "name": "Crude oil",
        "type": "Liquid",
        "wiki_link": "https://wiki.factorio.com/Crude_oil",
        "category": "Intermediate product",
        "recipe": {
            "time": null,
            "yield": null,
            "ingredients": []
        }
    },
    {
        "id": "crude-oil-barrel",
        "name": "Crude oil barrel",
        "type": "null",
        "wiki_link": "https://wiki.factorio.com/Crude_oil_barrel",
        "category": "Intermediate product",
        "recipe": {
            "time": null,
            "yield": null,
            "ingredients": []
        }
    },
    {
        "id": "decider-combinator",
        "name": "Decider combinator",
        "type": "Logic",
        "wiki_link": "https://wiki.factorio.com/Decider_combinator",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "copper-cable",
                    "amount": 5
                },
                {
                    "id": "electronic-circuit",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "deconstruction-planner",
        "name": "Deconstruction planner",
        "type": "Tool",
        "wiki_link": "https://wiki.factorio.com/Deconstruction_planner",
        "category": "category_TODO",
        "recipe": {
            "time": null,
            "yield": null,
            "ingredients": []
        }
    },
    {
        "id": "defender-capsule",
        "name": "Defender capsule",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Defender_capsule",
        "category": "Combat",
        "recipe": {
            "time": 8,
            "yield": 1,
            "ingredients": [
                {
                    "id": "electronic-circuit",
                    "amount": 2
                },
                {
                    "id": "iron-gear-wheel",
                    "amount": 3
                },
                {
                    "id": "piercing-rounds-magazine",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "destroyer-capsule",
        "name": "Destroyer capsule",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Destroyer_capsule",
        "category": "Combat",
        "recipe": {
            "time": 15,
            "yield": 1,
            "ingredients": [
                {
                    "id": "distractor-capsule",
                    "amount": 4
                },
                {
                    "id": "speed-module",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "discharge-defense",
        "name": "Discharge defense",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Discharge_defense",
        "category": "Combat",
        "recipe": {
            "time": 10,
            "yield": 1,
            "ingredients": [
                {
                    "id": "laser-turret",
                    "amount": 10
                },
                {
                    "id": "processing-unit",
                    "amount": 5
                },
                {
                    "id": "steel-plate",
                    "amount": 20
                }
            ]
        }
    },
    {
        "id": "discharge-defense-remote",
        "name": "Discharge defense remote",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Discharge_defense_remote",
        "category": "Combat",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "electronic-circuit",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "distractor-capsule",
        "name": "Distractor capsule",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Distractor_capsule",
        "category": "Combat",
        "recipe": {
            "time": 15,
            "yield": 1,
            "ingredients": [
                {
                    "id": "advanced-circuit",
                    "amount": 3
                },
                {
                    "id": "defender-capsule",
                    "amount": 4
                }
            ]
        }
    },
    {
        "id": "effectivity-module",
        "name": "Efficiency module",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Efficiency_module",
        "category": "Production",
        "recipe": {
            "time": 15,
            "yield": 1,
            "ingredients": [
                {
                    "id": "advanced-circuit",
                    "amount": 5
                },
                {
                    "id": "electronic-circuit",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "effectivity-module-2",
        "name": "Efficiency module 2",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Efficiency_module_2",
        "category": "Production",
        "recipe": {
            "time": 30,
            "yield": 1,
            "ingredients": [
                {
                    "id": "advanced-circuit",
                    "amount": 5
                },
                {
                    "id": "effectivity-module",
                    "amount": 4
                },
                {
                    "id": "processing-unit",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "effectivity-module-3",
        "name": "Efficiency module 3",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Efficiency_module_3",
        "category": "Production",
        "recipe": {
            "time": 60,
            "yield": 1,
            "ingredients": [
                {
                    "id": "advanced-circuit",
                    "amount": 5
                },
                {
                    "id": "effectivity-module-2",
                    "amount": 5
                },
                {
                    "id": "processing-unit",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "electric-engine-unit",
        "name": "Electric engine unit",
        "type": "Intermediate product",
        "wiki_link": "https://wiki.factorio.com/Electric_engine_unit",
        "category": "Intermediate product",
        "recipe": {
            "time": 10,
            "yield": 1,
            "ingredients": [
                {
                    "id": "electronic-circuit",
                    "amount": 2
                },
                {
                    "id": "engine-unit",
                    "amount": 1
                },
                {
                    "id": "lubricant",
                    "amount": 15
                }
            ]
        }
    },
    {
        "id": "electric-furnace",
        "name": "Electric furnace",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Electric_furnace",
        "category": "Production",
        "recipe": {
            "time": 5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "advanced-circuit",
                    "amount": 5
                },
                {
                    "id": "steel-plate",
                    "amount": 10
                },
                {
                    "id": "stone-brick",
                    "amount": 10
                }
            ]
        }
    },
    {
        "id": "electric-mining-drill",
        "name": "Electric mining drill",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Electric_mining_drill",
        "category": "Production",
        "recipe": {
            "time": 2,
            "yield": 1,
            "ingredients": [
                {
                    "id": "electronic-circuit",
                    "amount": 3
                },
                {
                    "id": "iron-gear-wheel",
                    "amount": 5
                },
                {
                    "id": "iron-plate",
                    "amount": 10
                }
            ]
        }
    },
    {
        "id": "electronic-circuit",
        "name": "Electronic circuit",
        "type": "Intermediate product",
        "wiki_link": "https://wiki.factorio.com/Electronic_circuit",
        "category": "Intermediate product",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "copper-cable",
                    "amount": 3
                },
                {
                    "id": "iron-plate",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "empty-barrel",
        "name": "Empty barrel",
        "type": "null",
        "wiki_link": "https://wiki.factorio.com/Empty_barrel",
        "category": "Intermediate product",
        "recipe": {
            "time": 1,
            "yield": 1,
            "ingredients": [
                {
                    "id": "steel-plate",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "energy-shield",
        "name": "Energy shield",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Energy_shield",
        "category": "Combat",
        "recipe": {
            "time": 10,
            "yield": 1,
            "ingredients": [
                {
                    "id": "advanced-circuit",
                    "amount": 5
                },
                {
                    "id": "steel-plate",
                    "amount": 10
                }
            ]
        }
    },
    {
        "id": "energy-shield-mk2",
        "name": "Energy shield MK2",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Energy_shield_MK2",
        "category": "Combat",
        "recipe": {
            "time": 10,
            "yield": 1,
            "ingredients": [
                {
                    "id": "energy-shield",
                    "amount": 10
                },
                {
                    "id": "processing-unit",
                    "amount": 10
                }
            ]
        }
    },
    {
        "id": "engine-unit",
        "name": "Engine unit",
        "type": "Intermediate product",
        "wiki_link": "https://wiki.factorio.com/Engine_unit",
        "category": "Intermediate product",
        "recipe": {
            "time": 10,
            "yield": 1,
            "ingredients": [
                {
                    "id": "iron-gear-wheel",
                    "amount": 1
                },
                {
                    "id": "pipe",
                    "amount": 2
                },
                {
                    "id": "steel-plate",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "exoskeleton",
        "name": "Exoskeleton",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Exoskeleton",
        "category": "Combat",
        "recipe": {
            "time": 10,
            "yield": 1,
            "ingredients": [
                {
                    "id": "electric-engine-unit",
                    "amount": 30
                },
                {
                    "id": "processing-unit",
                    "amount": 10
                },
                {
                    "id": "steel-plate",
                    "amount": 20
                }
            ]
        }
    },
    {
        "id": "explosive-cannon-shell",
        "name": "Explosive cannon shell",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Explosive_cannon_shell",
        "category": "Combat",
        "recipe": {
            "time": 8,
            "yield": 1,
            "ingredients": [
                {
                    "id": "explosives",
                    "amount": 2
                },
                {
                    "id": "plastic-bar",
                    "amount": 2
                },
                {
                    "id": "steel-plate",
                    "amount": 2
                }
            ]
        }
    },
    {
        "id": "explosive-rocket",
        "name": "Explosive rocket",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Explosive_rocket",
        "category": "Combat",
        "recipe": {
            "time": 8,
            "yield": 1,
            "ingredients": [
                {
                    "id": "explosives",
                    "amount": 2
                },
                {
                    "id": "rocket",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "explosive-uranium-cannon-shell",
        "name": "Explosive uranium cannon shell",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Explosive_uranium_cannon_shell",
        "category": "Combat",
        "recipe": {
            "time": 12,
            "yield": 1,
            "ingredients": [
                {
                    "id": "explosive-cannon-shell",
                    "amount": 1
                },
                {
                    "id": "uranium-238",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "explosives",
        "name": "Explosives",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Explosives",
        "category": "Intermediate product",
        "recipe": {
            "time": 5,
            "yield": 2,
            "ingredients": [
                {
                    "id": "coal",
                    "amount": 1
                },
                {
                    "id": "sulfur",
                    "amount": 1
                },
                {
                    "id": "water",
                    "amount": 10
                }
            ]
        }
    },
    {
        "id": "express-splitter",
        "name": "Express splitter",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Express_splitter",
        "category": "Logistics",
        "recipe": {
            "time": 2,
            "yield": 1,
            "ingredients": [
                {
                    "id": "advanced-circuit",
                    "amount": 10
                },
                {
                    "id": "fast-splitter",
                    "amount": 1
                },
                {
                    "id": "iron-gear-wheel",
                    "amount": 10
                },
                {
                    "id": "lubricant",
                    "amount": 80
                }
            ]
        }
    },
    {
        "id": "express-transport-belt",
        "name": "Express transport belt",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Express_transport_belt",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "fast-transport-belt",
                    "amount": 1
                },
                {
                    "id": "iron-gear-wheel",
                    "amount": 10
                },
                {
                    "id": "lubricant",
                    "amount": 20
                }
            ]
        }
    },
    {
        "id": "express-underground-belt",
        "name": "Express underground belt",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Express_underground_belt",
        "category": "Logistics",
        "recipe": {
            "time": 2,
            "yield": 2,
            "ingredients": [
                {
                    "id": "fast-underground-belt",
                    "amount": 2
                },
                {
                    "id": "iron-gear-wheel",
                    "amount": 80
                },
                {
                    "id": "lubricant",
                    "amount": 40
                }
            ]
        }
    },
    {
        "id": "fast-inserter",
        "name": "Fast inserter",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Fast_inserter",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "electronic-circuit",
                    "amount": 2
                },
                {
                    "id": "inserter",
                    "amount": 1
                },
                {
                    "id": "iron-plate",
                    "amount": 2
                }
            ]
        }
    },
    {
        "id": "fast-splitter",
        "name": "Fast splitter",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Fast_splitter",
        "category": "Logistics",
        "recipe": {
            "time": 2,
            "yield": 1,
            "ingredients": [
                {
                    "id": "electronic-circuit",
                    "amount": 10
                },
                {
                    "id": "iron-gear-wheel",
                    "amount": 10
                },
                {
                    "id": "splitter",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "fast-transport-belt",
        "name": "Fast transport belt",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Fast_transport_belt",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "iron-gear-wheel",
                    "amount": 5
                },
                {
                    "id": "transport-belt",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "fast-underground-belt",
        "name": "Fast underground belt",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Fast_underground_belt",
        "category": "Logistics",
        "recipe": {
            "time": 2,
            "yield": 2,
            "ingredients": [
                {
                    "id": "iron-gear-wheel",
                    "amount": 40
                },
                {
                    "id": "underground-belt",
                    "amount": 2
                }
            ]
        }
    },
    {
        "id": "filter-inserter",
        "name": "Filter inserter",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Filter_inserter",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "electronic-circuit",
                    "amount": 4
                },
                {
                    "id": "fast-inserter",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "firearm-magazine",
        "name": "Firearm magazine",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Firearm_magazine",
        "category": "Combat",
        "recipe": {
            "time": 1,
            "yield": 1,
            "ingredients": [
                {
                    "id": "iron-plate",
                    "amount": 4
                }
            ]
        }
    },
    {
        "id": "flamethrower",
        "name": "Flamethrower",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Flamethrower",
        "category": "Combat",
        "recipe": {
            "time": 10,
            "yield": 1,
            "ingredients": [
                {
                    "id": "iron-gear-wheel",
                    "amount": 10
                },
                {
                    "id": "steel-plate",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "flamethrower-ammo",
        "name": "Flamethrower ammo",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Flamethrower_ammo",
        "category": "Combat",
        "recipe": {
            "time": 6,
            "yield": 1,
            "ingredients": [
                {
                    "id": "heavy-oil",
                    "amount": 50
                },
                {
                    "id": "light-oil",
                    "amount": 50
                },
                {
                    "id": "steel-plate",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "flamethrower-turret",
        "name": "Flamethrower turret",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Flamethrower_turret",
        "category": "Combat",
        "recipe": {
            "time": 20,
            "yield": 1,
            "ingredients": [
                {
                    "id": "engine-unit",
                    "amount": 5
                },
                {
                    "id": "iron-gear-wheel",
                    "amount": 15
                },
                {
                    "id": "pipe",
                    "amount": 10
                },
                {
                    "id": "steel-plate",
                    "amount": 30
                }
            ]
        }
    },
    {
        "id": "fluid-wagon",
        "name": "Fluid wagon",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Fluid_wagon",
        "category": "Logistics",
        "recipe": {
            "time": 1.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "iron-gear-wheel",
                    "amount": 10
                },
                {
                    "id": "pipe",
                    "amount": 8
                },
                {
                    "id": "steel-plate",
                    "amount": 16
                },
                {
                    "id": "storage-tank",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "flying-robot-frame",
        "name": "Flying robot frame",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Flying_robot_frame",
        "category": "Intermediate product",
        "recipe": {
            "time": 20,
            "yield": 1,
            "ingredients": [
                {
                    "id": "battery",
                    "amount": 2
                },
                {
                    "id": "electric-engine-unit",
                    "amount": 1
                },
                {
                    "id": "electronic-circuit",
                    "amount": 3
                },
                {
                    "id": "steel-plate",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "gate",
        "name": "Gate",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Gate",
        "category": "Combat",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "electronic-circuit",
                    "amount": 2
                },
                {
                    "id": "steel-plate",
                    "amount": 2
                },
                {
                    "id": "stone-wall",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "green-wire",
        "name": "Green wire",
        "type": "Logic",
        "wiki_link": "https://wiki.factorio.com/Green_wire",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "copper-cable",
                    "amount": 1
                },
                {
                    "id": "electronic-circuit",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "grenade",
        "name": "Grenade",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Grenade",
        "category": "Combat",
        "recipe": {
            "time": 8,
            "yield": 1,
            "ingredients": [
                {
                    "id": "coal",
                    "amount": 10
                },
                {
                    "id": "iron-plate",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "gun-turret",
        "name": "Gun turret",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Gun_turret",
        "category": "Combat",
        "recipe": {
            "time": 8,
            "yield": 1,
            "ingredients": [
                {
                    "id": "copper-plate",
                    "amount": 10
                },
                {
                    "id": "iron-gear-wheel",
                    "amount": 10
                },
                {
                    "id": "iron-plate",
                    "amount": 20
                }
            ]
        }
    },
    {
        "id": "hazard-concrete",
        "name": "Hazard concrete",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Hazard_concrete",
        "category": "Logistics",
        "recipe": {
            "time": 0.25,
            "yield": 10,
            "ingredients": [
                {
                    "id": "concrete",
                    "amount": 10
                }
            ]
        }
    },
    {
        "id": "heat-exchanger",
        "name": "Heat exchanger",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Heat_exchanger",
        "category": "Production",
        "recipe": {
            "time": 3,
            "yield": 1,
            "ingredients": [
                {
                    "id": "copper-plate",
                    "amount": 100
                },
                {
                    "id": "pipe",
                    "amount": 10
                },
                {
                    "id": "steel-plate",
                    "amount": 10
                }
            ]
        }
    },
    {
        "id": "heat-pipe",
        "name": "Heat pipe",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Heat_pipe",
        "category": "Production",
        "recipe": {
            "time": 1,
            "yield": 1,
            "ingredients": [
                {
                    "id": "copper-plate",
                    "amount": 20
                },
                {
                    "id": "steel-plate",
                    "amount": 10
                }
            ]
        }
    },
    {
        "id": "heavy-armor",
        "name": "Heavy armor",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Heavy_armor",
        "category": "Combat",
        "recipe": {
            "time": 8,
            "yield": 1,
            "ingredients": [
                {
                    "id": "copper-plate",
                    "amount": 100
                },
                {
                    "id": "steel-plate",
                    "amount": 50
                }
            ]
        }
    },
    {
        "id": "heavy-oil",
        "name": "Heavy oil",
        "type": "Liquid",
        "wiki_link": "https://wiki.factorio.com/Heavy_oil",
        "category": "Intermediate product",
        "recipe": {
            "time": null,
            "yield": null,
            "ingredients": []
        }
    },
    {
        "id": "heavy-oil-barrel",
        "name": "Heavy oil barrel",
        "type": "null",
        "wiki_link": "https://wiki.factorio.com/Heavy_oil_barrel",
        "category": "Intermediate product",
        "recipe": {
            "time": null,
            "yield": null,
            "ingredients": []
        }
    },
    {
        "id": "high-tech-science-pack",
        "name": "High tech science pack",
        "type": "Science pack",
        "wiki_link": "https://wiki.factorio.com/High_tech_science_pack",
        "category": "Intermediate product",
        "recipe": {
            "time": 14,
            "yield": 2,
            "ingredients": [
                {
                    "id": "battery",
                    "amount": 1
                },
                {
                    "id": "copper-cable",
                    "amount": 30
                },
                {
                    "id": "processing-unit",
                    "amount": 3
                },
                {
                    "id": "speed-module",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "inserter",
        "name": "Inserter",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Inserter",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "electronic-circuit",
                    "amount": 1
                },
                {
                    "id": "iron-gear-wheel",
                    "amount": 1
                },
                {
                    "id": "iron-plate",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "iron-axe",
        "name": "Iron axe",
        "type": "Tool",
        "wiki_link": "https://wiki.factorio.com/Iron_axe",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "iron-plate",
                    "amount": 3
                },
                {
                    "id": "iron-stick",
                    "amount": 2
                }
            ]
        }
    },
    {
        "id": "iron-chest",
        "name": "Iron chest",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Iron_chest",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "iron-plate",
                    "amount": 8
                }
            ]
        }
    },
    {
        "id": "iron-gear-wheel",
        "name": "Iron gear wheel",
        "type": "Intermediate product",
        "wiki_link": "https://wiki.factorio.com/Iron_gear_wheel",
        "category": "Intermediate product",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "iron-plate",
                    "amount": 2
                }
            ]
        }
    },
    {
        "id": "iron-ore",
        "name": "Iron ore",
        "type": "Resource",
        "wiki_link": "https://wiki.factorio.com/Iron_ore",
        "category": "Intermediate product",
        "recipe": {
            "time": null,
            "yield": null,
            "ingredients": []
        }
    },
    {
        "id": "iron-plate",
        "name": "Iron plate",
        "type": "Intermediate product",
        "wiki_link": "https://wiki.factorio.com/Iron_plate",
        "category": "Intermediate product",
        "recipe": {
            "time": 3.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "iron-ore",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "iron-stick",
        "name": "Iron stick",
        "type": "Intermediate product",
        "wiki_link": "https://wiki.factorio.com/Iron_stick",
        "category": "Intermediate product",
        "recipe": {
            "time": 0.5,
            "yield": 2,
            "ingredients": [
                {
                    "id": "iron-plate",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "kovarex-enrichment-process",
        "name": "Kovarex enrichment process",
        "type": "Process",
        "wiki_link": "https://wiki.factorio.com/Kovarex_enrichment_process",
        "category": "Intermediate product",
        "recipe": {
            "time": 50,
            "yield": null,
            "ingredients": [
                {
                    "id": "uranium-235",
                    "amount": 40
                },
                {
                    "id": "uranium-238",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "lab",
        "name": "Lab",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Lab",
        "category": "Production",
        "recipe": {
            "time": 2,
            "yield": 1,
            "ingredients": [
                {
                    "id": "electronic-circuit",
                    "amount": 10
                },
                {
                    "id": "iron-gear-wheel",
                    "amount": 10
                },
                {
                    "id": "transport-belt",
                    "amount": 4
                }
            ]
        }
    },
    {
        "id": "lamp",
        "name": "Lamp",
        "type": "Logic",
        "wiki_link": "https://wiki.factorio.com/Lamp",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "electronic-circuit",
                    "amount": 1
                },
                {
                    "id": "iron-plate",
                    "amount": 1
                },
                {
                    "id": "iron-stick",
                    "amount": 3
                }
            ]
        }
    },
    {
        "id": "land-mine",
        "name": "Land mine",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Land_mine",
        "category": "Combat",
        "recipe": {
            "time": 5,
            "yield": 4,
            "ingredients": [
                {
                    "id": "explosives",
                    "amount": 2
                },
                {
                    "id": "steel-plate",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "landfill",
        "name": "Landfill",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Landfill",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "stone",
                    "amount": 20
                }
            ]
        }
    },
    {
        "id": "laser-turret",
        "name": "Laser turret",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Laser_turret",
        "category": "Combat",
        "recipe": {
            "time": 20,
            "yield": 1,
            "ingredients": [
                {
                    "id": "battery",
                    "amount": 12
                },
                {
                    "id": "electronic-circuit",
                    "amount": 20
                },
                {
                    "id": "steel-plate",
                    "amount": 20
                }
            ]
        }
    },
    {
        "id": "light-armor",
        "name": "Light armor",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Light_armor",
        "category": "Combat",
        "recipe": {
            "time": 3,
            "yield": 1,
            "ingredients": [
                {
                    "id": "iron-plate",
                    "amount": 40
                }
            ]
        }
    },
    {
        "id": "light-oil",
        "name": "Light oil",
        "type": "Liquid",
        "wiki_link": "https://wiki.factorio.com/Light_oil",
        "category": "Intermediate product",
        "recipe": {
            "time": null,
            "yield": null,
            "ingredients": []
        }
    },
    {
        "id": "light-oil-barrel",
        "name": "Light oil barrel",
        "type": "null",
        "wiki_link": "https://wiki.factorio.com/Light_oil_barrel",
        "category": "Intermediate product",
        "recipe": {
            "time": null,
            "yield": null,
            "ingredients": []
        }
    },
    {
        "id": "locomotive",
        "name": "Locomotive",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Locomotive",
        "category": "Logistics",
        "recipe": {
            "time": 4,
            "yield": 1,
            "ingredients": [
                {
                    "id": "electronic-circuit",
                    "amount": 10
                },
                {
                    "id": "engine-unit",
                    "amount": 20
                },
                {
                    "id": "steel-plate",
                    "amount": 30
                }
            ]
        }
    },
    {
        "id": "logistic-robot",
        "name": "Logistic robot",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Logistic_robot",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "advanced-circuit",
                    "amount": 2
                },
                {
                    "id": "flying-robot-frame",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "long-handed-inserter",
        "name": "Long handed inserter",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Long_handed_inserter",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "inserter",
                    "amount": 1
                },
                {
                    "id": "iron-gear-wheel",
                    "amount": 1
                },
                {
                    "id": "iron-plate",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "low-density-structure",
        "name": "Low density structure",
        "type": "Intermediate product",
        "wiki_link": "https://wiki.factorio.com/Low_density_structure",
        "category": "Intermediate product",
        "recipe": {
            "time": 30,
            "yield": 1,
            "ingredients": [
                {
                    "id": "copper-plate",
                    "amount": 5
                },
                {
                    "id": "plastic-bar",
                    "amount": 5
                },
                {
                    "id": "steel-plate",
                    "amount": 10
                }
            ]
        }
    },
    {
        "id": "lubricant",
        "name": "Lubricant",
        "type": "Liquid",
        "wiki_link": "https://wiki.factorio.com/Lubricant",
        "category": "Intermediate product",
        "recipe": {
            "time": 1,
            "yield": 10,
            "ingredients": [
                {
                    "id": "heavy-oil",
                    "amount": 10
                }
            ]
        }
    },
    {
        "id": "lubricant-barrel",
        "name": "Lubricant barrel",
        "type": "null",
        "wiki_link": "https://wiki.factorio.com/Lubricant_barrel",
        "category": "Intermediate product",
        "recipe": {
            "time": null,
            "yield": null,
            "ingredients": []
        }
    },
    {
        "id": "medium-electric-pole",
        "name": "Medium electric pole",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Medium_electric_pole",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "copper-plate",
                    "amount": 2
                },
                {
                    "id": "steel-plate",
                    "amount": 2
                }
            ]
        }
    },
    {
        "id": "military-science-pack",
        "name": "Military science pack",
        "type": "Science pack",
        "wiki_link": "https://wiki.factorio.com/Military_science_pack",
        "category": "Intermediate product",
        "recipe": {
            "time": 10,
            "yield": 2,
            "ingredients": [
                {
                    "id": "grenade",
                    "amount": 1
                },
                {
                    "id": "gun-turret",
                    "amount": 1
                },
                {
                    "id": "piercing-rounds-magazine",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "modular-armor",
        "name": "Modular armor",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Modular_armor",
        "category": "Combat",
        "recipe": {
            "time": 15,
            "yield": 1,
            "ingredients": [
                {
                    "id": "advanced-circuit",
                    "amount": 30
                },
                {
                    "id": "steel-plate",
                    "amount": 50
                }
            ]
        }
    },
    {
        "id": "nightvision",
        "name": "Nightvision",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Nightvision",
        "category": "Combat",
        "recipe": {
            "time": 10,
            "yield": 1,
            "ingredients": [
                {
                    "id": "advanced-circuit",
                    "amount": 5
                },
                {
                    "id": "steel-plate",
                    "amount": 10
                }
            ]
        }
    },
    {
        "id": "nuclear-fuel",
        "name": "Nuclear fuel",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Nuclear_fuel",
        "category": "Intermediate product",
        "recipe": {
            "time": 60,
            "yield": 1,
            "ingredients": [
                {
                    "id": "rocket-fuel",
                    "amount": 1
                },
                {
                    "id": "uranium-235",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "nuclear-fuel-reprocessing",
        "name": "Nuclear fuel reprocessing",
        "type": "Process",
        "wiki_link": "https://wiki.factorio.com/Nuclear_fuel_reprocessing",
        "category": "Intermediate product",
        "recipe": {
            "time": 50,
            "yield": null,
            "ingredients": [
                {
                    "id": "used-up-uranium-fuel-cell",
                    "amount": 5
                },
                {
                    "id": "uranium-238",
                    "amount": 3
                }
            ]
        }
    },
    {
        "id": "nuclear-reactor",
        "name": "Nuclear reactor",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Nuclear_reactor",
        "category": "Production",
        "recipe": {
            "time": 8,
            "yield": 1,
            "ingredients": [
                {
                    "id": "advanced-circuit",
                    "amount": 500
                },
                {
                    "id": "concrete",
                    "amount": 500
                },
                {
                    "id": "copper-plate",
                    "amount": 500
                },
                {
                    "id": "steel-plate",
                    "amount": 500
                }
            ]
        }
    },
    {
        "id": "offshore-pump",
        "name": "Offshore pump",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Offshore_pump",
        "category": "Production",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "electronic-circuit",
                    "amount": 2
                },
                {
                    "id": "iron-gear-wheel",
                    "amount": 1
                },
                {
                    "id": "pipe",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "oil-refinery",
        "name": "Oil refinery",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Oil_refinery",
        "category": "Production",
        "recipe": {
            "time": 8,
            "yield": 1,
            "ingredients": [
                {
                    "id": "electronic-circuit",
                    "amount": 10
                },
                {
                    "id": "iron-gear-wheel",
                    "amount": 10
                },
                {
                    "id": "pipe",
                    "amount": 10
                },
                {
                    "id": "steel-plate",
                    "amount": 15
                },
                {
                    "id": "stone-brick",
                    "amount": 10
                }
            ]
        }
    },
    {
        "id": "logistic-chest-passive-provider",
        "name": "Passive provider chest",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Passive_provider_chest",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "advanced-circuit",
                    "amount": 1
                },
                {
                    "id": "electronic-circuit",
                    "amount": 3
                },
                {
                    "id": "steel-chest",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "personal-laser-defense",
        "name": "Personal laser defense",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Personal_laser_defense",
        "category": "Combat",
        "recipe": {
            "time": 10,
            "yield": 1,
            "ingredients": [
                {
                    "id": "laser-turret",
                    "amount": 5
                },
                {
                    "id": "processing-unit",
                    "amount": 1
                },
                {
                    "id": "steel-plate",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "personal-roboport",
        "name": "Personal roboport",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Personal_roboport",
        "category": "Combat",
        "recipe": {
            "time": 10,
            "yield": 1,
            "ingredients": [
                {
                    "id": "advanced-circuit",
                    "amount": 10
                },
                {
                    "id": "battery",
                    "amount": 45
                },
                {
                    "id": "iron-gear-wheel",
                    "amount": 40
                },
                {
                    "id": "steel-plate",
                    "amount": 20
                }
            ]
        }
    },
    {
        "id": "personal-roboport-mk2",
        "name": "Personal roboport MK2",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Personal_roboport_MK2",
        "category": "Combat",
        "recipe": {
            "time": 20,
            "yield": 1,
            "ingredients": [
                {
                    "id": "personal-roboport",
                    "amount": 5
                },
                {
                    "id": "processing-unit",
                    "amount": 100
                }
            ]
        }
    },
    {
        "id": "petroleum-gas",
        "name": "Petroleum gas",
        "type": "Liquid",
        "wiki_link": "https://wiki.factorio.com/Petroleum_gas",
        "category": "Intermediate product",
        "recipe": {
            "time": null,
            "yield": null,
            "ingredients": []
        }
    },
    {
        "id": "petroleum-gas-barrel",
        "name": "Petroleum gas barrel",
        "type": "null",
        "wiki_link": "https://wiki.factorio.com/Petroleum_gas_barrel",
        "category": "Intermediate product",
        "recipe": {
            "time": null,
            "yield": null,
            "ingredients": []
        }
    },
    {
        "id": "piercing-rounds-magazine",
        "name": "Piercing rounds magazine",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Piercing_rounds_magazine",
        "category": "Combat",
        "recipe": {
            "time": 3,
            "yield": 1,
            "ingredients": [
                {
                    "id": "copper-plate",
                    "amount": 5
                },
                {
                    "id": "firearm-magazine",
                    "amount": 1
                },
                {
                    "id": "steel-plate",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "piercing-shotgun-shells",
        "name": "Piercing shotgun shells",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Piercing_shotgun_shells",
        "category": "Combat",
        "recipe": {
            "time": 8,
            "yield": 1,
            "ingredients": [
                {
                    "id": "copper-plate",
                    "amount": 5
                },
                {
                    "id": "shotgun-shells",
                    "amount": 2
                },
                {
                    "id": "steel-plate",
                    "amount": 2
                }
            ]
        }
    },
    {
        "id": "pipe",
        "name": "Pipe",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Pipe",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "iron-plate",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "pipe-to-ground",
        "name": "Pipe to ground",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Pipe_to_ground",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 2,
            "ingredients": [
                {
                    "id": "iron-plate",
                    "amount": 5
                },
                {
                    "id": "pipe",
                    "amount": 10
                }
            ]
        }
    },
    {
        "id": "pistol",
        "name": "Pistol",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Pistol",
        "category": "Combat",
        "recipe": {
            "time": 5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "copper-plate",
                    "amount": 5
                },
                {
                    "id": "iron-plate",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "plastic-bar",
        "name": "Plastic bar",
        "type": "Intermediate product",
        "wiki_link": "https://wiki.factorio.com/Plastic_bar",
        "category": "Intermediate product",
        "recipe": {
            "time": 1,
            "yield": 2,
            "ingredients": [
                {
                    "id": "coal",
                    "amount": 1
                },
                {
                    "id": "petroleum-gas",
                    "amount": 20
                }
            ]
        }
    },
    {
        "id": "poison-capsule",
        "name": "Poison capsule",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Poison_capsule",
        "category": "Combat",
        "recipe": {
            "time": 8,
            "yield": 1,
            "ingredients": [
                {
                    "id": "coal",
                    "amount": 10
                },
                {
                    "id": "electronic-circuit",
                    "amount": 3
                },
                {
                    "id": "steel-plate",
                    "amount": 3
                }
            ]
        }
    },
    {
        "id": "portable-fusion-reactor",
        "name": "Portable fusion reactor",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Portable_fusion_reactor",
        "category": "Combat",
        "recipe": {
            "time": 10,
            "yield": 1,
            "ingredients": [
                {
                    "id": "processing-unit",
                    "amount": 250
                }
            ]
        }
    },
    {
        "id": "portable-solar-panel",
        "name": "Portable solar panel",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Portable_solar_panel",
        "category": "Combat",
        "recipe": {
            "time": 10,
            "yield": 1,
            "ingredients": [
                {
                    "id": "advanced-circuit",
                    "amount": 1
                },
                {
                    "id": "solar-panel",
                    "amount": 5
                },
                {
                    "id": "steel-plate",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "power-armor",
        "name": "Power armor",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Power_armor",
        "category": "Combat",
        "recipe": {
            "time": 20,
            "yield": 1,
            "ingredients": [
                {
                    "id": "electric-engine-unit",
                    "amount": 20
                },
                {
                    "id": "processing-unit",
                    "amount": 40
                },
                {
                    "id": "steel-plate",
                    "amount": 40
                }
            ]
        }
    },
    {
        "id": "power-armor-mk2",
        "name": "Power armor MK2",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Power_armor_MK2",
        "category": "Combat",
        "recipe": {
            "time": 25,
            "yield": 1,
            "ingredients": [
                {
                    "id": "effectivity-module-3",
                    "amount": 5
                },
                {
                    "id": "processing-unit",
                    "amount": 40
                },
                {
                    "id": "speed-module-3",
                    "amount": 5
                },
                {
                    "id": "steel-plate",
                    "amount": 40
                }
            ]
        }
    },
    {
        "id": "power-switch",
        "name": "Power switch",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Power_switch",
        "category": "Logistics",
        "recipe": {
            "time": 2,
            "yield": 1,
            "ingredients": [
                {
                    "id": "copper-cable",
                    "amount": 5
                },
                {
                    "id": "electronic-circuit",
                    "amount": 2
                },
                {
                    "id": "iron-plate",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "processing-unit",
        "name": "Processing unit",
        "type": "Intermediate product",
        "wiki_link": "https://wiki.factorio.com/Processing_unit",
        "category": "Intermediate product",
        "recipe": {
            "time": 10,
            "yield": 1,
            "ingredients": [
                {
                    "id": "advanced-circuit",
                    "amount": 2
                },
                {
                    "id": "electronic-circuit",
                    "amount": 20
                },
                {
                    "id": "sulfuric-acid",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "production-science-pack",
        "name": "Production science pack",
        "type": "Science pack",
        "wiki_link": "https://wiki.factorio.com/Production_science_pack",
        "category": "Intermediate product",
        "recipe": {
            "time": 14,
            "yield": 2,
            "ingredients": [
                {
                    "id": "electric-engine-unit",
                    "amount": 1
                },
                {
                    "id": "electric-furnace",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "productivity-module",
        "name": "Productivity module",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Productivity_module",
        "category": "Production",
        "recipe": {
            "time": 15,
            "yield": 1,
            "ingredients": [
                {
                    "id": "advanced-circuit",
                    "amount": 5
                },
                {
                    "id": "electronic-circuit",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "productivity-module-2",
        "name": "Productivity module 2",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Productivity_module_2",
        "category": "Production",
        "recipe": {
            "time": 30,
            "yield": 1,
            "ingredients": [
                {
                    "id": "advanced-circuit",
                    "amount": 5
                },
                {
                    "id": "processing-unit",
                    "amount": 5
                },
                {
                    "id": "productivity-module",
                    "amount": 4
                }
            ]
        }
    },
    {
        "id": "productivity-module-3",
        "name": "Productivity module 3",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Productivity_module_3",
        "category": "Production",
        "recipe": {
            "time": 60,
            "yield": 1,
            "ingredients": [
                {
                    "id": "advanced-circuit",
                    "amount": 5
                },
                {
                    "id": "processing-unit",
                    "amount": 5
                },
                {
                    "id": "productivity-module-2",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "programmable-speaker",
        "name": "Programmable speaker",
        "type": "Logic",
        "wiki_link": "https://wiki.factorio.com/Programmable_speaker",
        "category": "Logistics",
        "recipe": {
            "time": 2,
            "yield": 1,
            "ingredients": [
                {
                    "id": "copper-cable",
                    "amount": 5
                },
                {
                    "id": "electronic-circuit",
                    "amount": 4
                },
                {
                    "id": "iron-plate",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "pump",
        "name": "Pump",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Pump",
        "category": "Logistics",
        "recipe": {
            "time": 2,
            "yield": 1,
            "ingredients": [
                {
                    "id": "engine-unit",
                    "amount": 1
                },
                {
                    "id": "pipe",
                    "amount": 1
                },
                {
                    "id": "steel-plate",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "pumpjack",
        "name": "Pumpjack",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Pumpjack",
        "category": "Production",
        "recipe": {
            "time": 5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "electronic-circuit",
                    "amount": 5
                },
                {
                    "id": "iron-gear-wheel",
                    "amount": 10
                },
                {
                    "id": "pipe",
                    "amount": 10
                },
                {
                    "id": "steel-plate",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "radar",
        "name": "Radar",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Radar",
        "category": "Combat",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "electronic-circuit",
                    "amount": 5
                },
                {
                    "id": "iron-gear-wheel",
                    "amount": 5
                },
                {
                    "id": "iron-plate",
                    "amount": 10
                }
            ]
        }
    },
    {
        "id": "rail",
        "name": "Rail",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Rail",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 2,
            "ingredients": [
                {
                    "id": "iron-stick",
                    "amount": 1
                },
                {
                    "id": "steel-plate",
                    "amount": 1
                },
                {
                    "id": "stone",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "rail-chain-signal",
        "name": "Rail chain signal",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Rail_chain_signal",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "electronic-circuit",
                    "amount": 1
                },
                {
                    "id": "iron-plate",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "rail-signal",
        "name": "Rail signal",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Rail_signal",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "electronic-circuit",
                    "amount": 1
                },
                {
                    "id": "iron-plate",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "raw-fish",
        "name": "Raw fish",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Raw_fish",
        "category": "Intermediate product",
        "recipe": {
            "time": null,
            "yield": null,
            "ingredients": []
        }
    },
    {
        "id": "raw-wood",
        "name": "Raw wood",
        "type": "Resource",
        "wiki_link": "https://wiki.factorio.com/Raw_wood",
        "category": "Intermediate product",
        "recipe": {
            "time": null,
            "yield": null,
            "ingredients": []
        }
    },
    {
        "id": "red-wire",
        "name": "Red wire",
        "type": "Logic",
        "wiki_link": "https://wiki.factorio.com/Red_wire",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "copper-cable",
                    "amount": 1
                },
                {
                    "id": "electronic-circuit",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "refined-concrete",
        "name": "Refined concrete",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Refined_concrete",
        "category": "Logistics",
        "recipe": {
            "time": 15,
            "yield": 10,
            "ingredients": [
                {
                    "id": "concrete",
                    "amount": 20
                },
                {
                    "id": "iron-stick",
                    "amount": 8
                },
                {
                    "id": "steel-plate",
                    "amount": 1
                },
                {
                    "id": "water",
                    "amount": 100
                }
            ]
        }
    },
    {
        "id": "refined-hazard-concrete",
        "name": "Refined hazard concrete",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Refined_hazard_concrete",
        "category": "Logistics",
        "recipe": {
            "time": 0.25,
            "yield": 10,
            "ingredients": [
                {
                    "id": "refined-concrete",
                    "amount": 10
                }
            ]
        }
    },
    {
        "id": "repair-pack",
        "name": "Repair pack",
        "type": "Tool",
        "wiki_link": "https://wiki.factorio.com/Repair_pack",
        "category": "Production",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "electronic-circuit",
                    "amount": 2
                },
                {
                    "id": "iron-gear-wheel",
                    "amount": 2
                }
            ]
        }
    },
    {
        "id": "logistic-chest-requester",
        "name": "Requester chest",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Requester_chest",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "advanced-circuit",
                    "amount": 1
                },
                {
                    "id": "electronic-circuit",
                    "amount": 3
                },
                {
                    "id": "steel-chest",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "roboport",
        "name": "Roboport",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Roboport",
        "category": "Logistics",
        "recipe": {
            "time": 5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "advanced-circuit",
                    "amount": 45
                },
                {
                    "id": "iron-gear-wheel",
                    "amount": 45
                },
                {
                    "id": "steel-plate",
                    "amount": 45
                }
            ]
        }
    },
    {
        "id": "rocket",
        "name": "Rocket",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Rocket",
        "category": "Combat",
        "recipe": {
            "time": 8,
            "yield": 1,
            "ingredients": [
                {
                    "id": "electronic-circuit",
                    "amount": 1
                },
                {
                    "id": "explosives",
                    "amount": 1
                },
                {
                    "id": "iron-plate",
                    "amount": 2
                }
            ]
        }
    },
    {
        "id": "rocket-control-unit",
        "name": "Rocket control unit",
        "type": "Intermediate product",
        "wiki_link": "https://wiki.factorio.com/Rocket_control_unit",
        "category": "Intermediate product",
        "recipe": {
            "time": 30,
            "yield": 1,
            "ingredients": [
                {
                    "id": "processing-unit",
                    "amount": 1
                },
                {
                    "id": "speed-module",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "rocket-fuel",
        "name": "Rocket fuel",
        "type": "Intermediate product",
        "wiki_link": "https://wiki.factorio.com/Rocket_fuel",
        "category": "Intermediate product",
        "recipe": {
            "time": 30,
            "yield": 1,
            "ingredients": [
                {
                    "id": "solid-fuel",
                    "amount": 10
                }
            ]
        }
    },
    {
        "id": "rocket-launcher",
        "name": "Rocket launcher",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Rocket_launcher",
        "category": "Combat",
        "recipe": {
            "time": 10,
            "yield": 1,
            "ingredients": [
                {
                    "id": "electronic-circuit",
                    "amount": 5
                },
                {
                    "id": "iron-gear-wheel",
                    "amount": 5
                },
                {
                    "id": "iron-plate",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "rocket-part",
        "name": "Rocket part",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Rocket_part",
        "category": "Intermediate product",
        "recipe": {
            "time": 3,
            "yield": 1,
            "ingredients": [
                {
                    "id": "low-density-structure",
                    "amount": 10
                },
                {
                    "id": "rocket-control-unit",
                    "amount": 10
                },
                {
                    "id": "rocket-fuel",
                    "amount": 10
                }
            ]
        }
    },
    {
        "id": "rocket-silo",
        "name": "Rocket silo",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Rocket_silo",
        "category": "Combat",
        "recipe": {
            "time": 30,
            "yield": 1,
            "ingredients": [
                {
                    "id": "concrete",
                    "amount": 1000
                },
                {
                    "id": "electric-engine-unit",
                    "amount": 200
                },
                {
                    "id": "pipe",
                    "amount": 100
                },
                {
                    "id": "processing-unit",
                    "amount": 200
                },
                {
                    "id": "steel-plate",
                    "amount": 1000
                }
            ]
        }
    },
    {
        "id": "satellite",
        "name": "Satellite",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Satellite",
        "category": "Intermediate product",
        "recipe": {
            "time": 5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "accumulator",
                    "amount": 100
                },
                {
                    "id": "low-density-structure",
                    "amount": 100
                },
                {
                    "id": "processing-unit",
                    "amount": 100
                },
                {
                    "id": "radar",
                    "amount": 5
                },
                {
                    "id": "rocket-fuel",
                    "amount": 50
                },
                {
                    "id": "solar-panel",
                    "amount": 100
                }
            ]
        }
    },
    {
        "id": "science-pack-1",
        "name": "Science pack 1",
        "type": "Science pack",
        "wiki_link": "https://wiki.factorio.com/Science_pack_1",
        "category": "Intermediate product",
        "recipe": {
            "time": 5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "copper-plate",
                    "amount": 1
                },
                {
                    "id": "iron-gear-wheel",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "science-pack-2",
        "name": "Science pack 2",
        "type": "Science pack",
        "wiki_link": "https://wiki.factorio.com/Science_pack_2",
        "category": "Intermediate product",
        "recipe": {
            "time": 6,
            "yield": 1,
            "ingredients": [
                {
                    "id": "inserter",
                    "amount": 1
                },
                {
                    "id": "transport-belt",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "science-pack-3",
        "name": "Science pack 3",
        "type": "Science pack",
        "wiki_link": "https://wiki.factorio.com/Science_pack_3",
        "category": "Intermediate product",
        "recipe": {
            "time": 12,
            "yield": 1,
            "ingredients": [
                {
                    "id": "advanced-circuit",
                    "amount": 1
                },
                {
                    "id": "electric-mining-drill",
                    "amount": 1
                },
                {
                    "id": "engine-unit",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "shotgun",
        "name": "Shotgun",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Shotgun",
        "category": "Combat",
        "recipe": {
            "time": 10,
            "yield": 1,
            "ingredients": [
                {
                    "id": "copper-plate",
                    "amount": 10
                },
                {
                    "id": "iron-gear-wheel",
                    "amount": 5
                },
                {
                    "id": "iron-plate",
                    "amount": 15
                },
                {
                    "id": "wood",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "shotgun-shells",
        "name": "Shotgun shells",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Shotgun_shells",
        "category": "Combat",
        "recipe": {
            "time": 3,
            "yield": 1,
            "ingredients": [
                {
                    "id": "copper-plate",
                    "amount": 2
                },
                {
                    "id": "iron-plate",
                    "amount": 2
                }
            ]
        }
    },
    {
        "id": "slowdown-capsule",
        "name": "Slowdown capsule",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Slowdown_capsule",
        "category": "Combat",
        "recipe": {
            "time": 8,
            "yield": 1,
            "ingredients": [
                {
                    "id": "coal",
                    "amount": 5
                },
                {
                    "id": "electronic-circuit",
                    "amount": 2
                },
                {
                    "id": "steel-plate",
                    "amount": 2
                }
            ]
        }
    },
    {
        "id": "small-electric-pole",
        "name": "Small electric pole",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Small_electric_pole",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 2,
            "ingredients": [
                {
                    "id": "copper-cable",
                    "amount": 2
                },
                {
                    "id": "wood",
                    "amount": 2
                }
            ]
        }
    },
    {
        "id": "solar-panel",
        "name": "Solar panel",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Solar_panel",
        "category": "Production",
        "recipe": {
            "time": 10,
            "yield": 1,
            "ingredients": [
                {
                    "id": "copper-plate",
                    "amount": 5
                },
                {
                    "id": "electronic-circuit",
                    "amount": 15
                },
                {
                    "id": "steel-plate",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "solid-fuel",
        "name": "Solid fuel",
        "type": "Resource",
        "wiki_link": "https://wiki.factorio.com/Solid_fuel",
        "category": "Intermediate product",
        "recipe": {
            "time": null,
            "yield": null,
            "ingredients": []
        }
    },
    {
        "id": "space-science-pack",
        "name": "Space science pack",
        "type": "Science pack",
        "wiki_link": "https://wiki.factorio.com/Space_science_pack",
        "category": "Intermediate product",
        "recipe": {
            "time": 300,
            "yield": 1000,
            "ingredients": [
                {
                    "id": "rocket-part",
                    "amount": 100
                },
                {
                    "id": "satellite",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "speed-module",
        "name": "Speed module",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Speed_module",
        "category": "Production",
        "recipe": {
            "time": 15,
            "yield": 1,
            "ingredients": [
                {
                    "id": "advanced-circuit",
                    "amount": 5
                },
                {
                    "id": "electronic-circuit",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "speed-module-2",
        "name": "Speed module 2",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Speed_module_2",
        "category": "Production",
        "recipe": {
            "time": 30,
            "yield": 1,
            "ingredients": [
                {
                    "id": "advanced-circuit",
                    "amount": 5
                },
                {
                    "id": "processing-unit",
                    "amount": 5
                },
                {
                    "id": "speed-module",
                    "amount": 4
                }
            ]
        }
    },
    {
        "id": "speed-module-3",
        "name": "Speed module 3",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Speed_module_3",
        "category": "Production",
        "recipe": {
            "time": 60,
            "yield": 1,
            "ingredients": [
                {
                    "id": "advanced-circuit",
                    "amount": 5
                },
                {
                    "id": "processing-unit",
                    "amount": 5
                },
                {
                    "id": "speed-module-2",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "splitter",
        "name": "Splitter",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Splitter",
        "category": "Logistics",
        "recipe": {
            "time": 1,
            "yield": 1,
            "ingredients": [
                {
                    "id": "electronic-circuit",
                    "amount": 5
                },
                {
                    "id": "iron-plate",
                    "amount": 5
                },
                {
                    "id": "transport-belt",
                    "amount": 4
                }
            ]
        }
    },
    {
        "id": "stack-filter-inserter",
        "name": "Stack filter inserter",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Stack_filter_inserter",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "electronic-circuit",
                    "amount": 5
                },
                {
                    "id": "stack-inserter",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "stack-inserter",
        "name": "Stack inserter",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Stack_inserter",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "advanced-circuit",
                    "amount": 1
                },
                {
                    "id": "electronic-circuit",
                    "amount": 15
                },
                {
                    "id": "fast-inserter",
                    "amount": 1
                },
                {
                    "id": "iron-gear-wheel",
                    "amount": 15
                }
            ]
        }
    },
    {
        "id": "steam",
        "name": "Steam",
        "type": "Liquid",
        "wiki_link": "https://wiki.factorio.com/Steam",
        "category": "Intermediate product",
        "recipe": {
            "time": null,
            "yield": null,
            "ingredients": []
        }
    },
    {
        "id": "steam-engine",
        "name": "Steam engine",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Steam_engine",
        "category": "Production",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "iron-gear-wheel",
                    "amount": 8
                },
                {
                    "id": "iron-plate",
                    "amount": 10
                },
                {
                    "id": "pipe",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "steam-turbine",
        "name": "Steam turbine",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Steam_turbine",
        "category": "Production",
        "recipe": {
            "time": 3,
            "yield": 1,
            "ingredients": [
                {
                    "id": "copper-plate",
                    "amount": 50
                },
                {
                    "id": "iron-gear-wheel",
                    "amount": 50
                },
                {
                    "id": "pipe",
                    "amount": 20
                }
            ]
        }
    },
    {
        "id": "steel-axe",
        "name": "Steel axe",
        "type": "Tool",
        "wiki_link": "https://wiki.factorio.com/Steel_axe",
        "category": "Production",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "iron-stick",
                    "amount": 2
                },
                {
                    "id": "steel-plate",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "steel-chest",
        "name": "Steel chest",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Steel_chest",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "steel-plate",
                    "amount": 8
                }
            ]
        }
    },
    {
        "id": "steel-furnace",
        "name": "Steel furnace",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Steel_furnace",
        "category": "Production",
        "recipe": {
            "time": 3,
            "yield": 1,
            "ingredients": [
                {
                    "id": "steel-plate",
                    "amount": 6
                },
                {
                    "id": "stone-brick",
                    "amount": 10
                }
            ]
        }
    },
    {
        "id": "steel-plate",
        "name": "Steel plate",
        "type": "Intermediate product",
        "wiki_link": "https://wiki.factorio.com/Steel_plate",
        "category": "Intermediate product",
        "recipe": {
            "time": 35,
            "yield": 1,
            "ingredients": [
                {
                    "id": "iron-plate",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "stone",
        "name": "Stone",
        "type": "Resource",
        "wiki_link": "https://wiki.factorio.com/Stone",
        "category": "Intermediate product",
        "recipe": {
            "time": null,
            "yield": null,
            "ingredients": []
        }
    },
    {
        "id": "stone-brick",
        "name": "Stone brick",
        "type": "Intermediate product",
        "wiki_link": "https://wiki.factorio.com/Stone_brick",
        "category": "Logistics",
        "recipe": {
            "time": 3.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "stone",
                    "amount": 2
                }
            ]
        }
    },
    {
        "id": "stone-furnace",
        "name": "Stone furnace",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Stone_furnace",
        "category": "Production",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "stone",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "stone-wall",
        "name": "Stone wall",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Stone_wall",
        "category": "Combat",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "stone-brick",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "logistic-chest-storage",
        "name": "Storage chest",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Storage_chest",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "advanced-circuit",
                    "amount": 1
                },
                {
                    "id": "electronic-circuit",
                    "amount": 3
                },
                {
                    "id": "steel-chest",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "storage-tank",
        "name": "Storage tank",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Storage_tank",
        "category": "Logistics",
        "recipe": {
            "time": 3,
            "yield": 1,
            "ingredients": [
                {
                    "id": "iron-plate",
                    "amount": 20
                },
                {
                    "id": "steel-plate",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "submachine-gun",
        "name": "Submachine gun",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Submachine_gun",
        "category": "Combat",
        "recipe": {
            "time": 10,
            "yield": 1,
            "ingredients": [
                {
                    "id": "copper-plate",
                    "amount": 5
                },
                {
                    "id": "iron-gear-wheel",
                    "amount": 10
                },
                {
                    "id": "iron-plate",
                    "amount": 10
                }
            ]
        }
    },
    {
        "id": "substation",
        "name": "Substation",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Substation",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "advanced-circuit",
                    "amount": 5
                },
                {
                    "id": "copper-plate",
                    "amount": 5
                },
                {
                    "id": "steel-plate",
                    "amount": 10
                }
            ]
        }
    },
    {
        "id": "sulfur",
        "name": "Sulfur",
        "type": "Intermediate product",
        "wiki_link": "https://wiki.factorio.com/Sulfur",
        "category": "Intermediate product",
        "recipe": {
            "time": 1,
            "yield": 2,
            "ingredients": [
                {
                    "id": "petroleum-gas",
                    "amount": 30
                },
                {
                    "id": "water",
                    "amount": 30
                }
            ]
        }
    },
    {
        "id": "sulfuric-acid",
        "name": "Sulfuric acid",
        "type": "Liquid",
        "wiki_link": "https://wiki.factorio.com/Sulfuric_acid",
        "category": "Intermediate product",
        "recipe": {
            "time": 1,
            "yield": 50,
            "ingredients": [
                {
                    "id": "iron-plate",
                    "amount": 1
                },
                {
                    "id": "sulfur",
                    "amount": 5
                },
                {
                    "id": "water",
                    "amount": 100
                }
            ]
        }
    },
    {
        "id": "sulfuric-acid-barrel",
        "name": "Sulfuric acid barrel",
        "type": "null",
        "wiki_link": "https://wiki.factorio.com/Sulfuric_acid_barrel",
        "category": "Intermediate product",
        "recipe": {
            "time": null,
            "yield": null,
            "ingredients": []
        }
    },
    {
        "id": "tank",
        "name": "Tank",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Tank",
        "category": "Logistics",
        "recipe": {
            "time": 8,
            "yield": 1,
            "ingredients": [
                {
                    "id": "advanced-circuit",
                    "amount": 10
                },
                {
                    "id": "engine-unit",
                    "amount": 32
                },
                {
                    "id": "iron-gear-wheel",
                    "amount": 15
                },
                {
                    "id": "steel-plate",
                    "amount": 50
                }
            ]
        }
    },
    {
        "id": "train-stop",
        "name": "Train stop",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Train_stop",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "electronic-circuit",
                    "amount": 5
                },
                {
                    "id": "iron-plate",
                    "amount": 10
                },
                {
                    "id": "steel-plate",
                    "amount": 3
                }
            ]
        }
    },
    {
        "id": "transport-belt",
        "name": "Transport belt",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Transport_belt",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 2,
            "ingredients": [
                {
                    "id": "iron-gear-wheel",
                    "amount": 1
                },
                {
                    "id": "iron-plate",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "underground-belt",
        "name": "Underground belt",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Underground_belt",
        "category": "Logistics",
        "recipe": {
            "time": 1,
            "yield": 2,
            "ingredients": [
                {
                    "id": "iron-plate",
                    "amount": 10
                },
                {
                    "id": "transport-belt",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "uranium-cannon-shell",
        "name": "Uranium cannon shell",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Uranium_cannon_shell",
        "category": "Combat",
        "recipe": {
            "time": 12,
            "yield": 1,
            "ingredients": [
                {
                    "id": "cannon-shell",
                    "amount": 1
                },
                {
                    "id": "uranium-238",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "uranium-fuel-cell",
        "name": "Uranium fuel cell",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Uranium_fuel_cell",
        "category": "Intermediate product",
        "recipe": {
            "time": 10,
            "yield": 10,
            "ingredients": [
                {
                    "id": "iron-plate",
                    "amount": 10
                },
                {
                    "id": "uranium-235",
                    "amount": 1
                },
                {
                    "id": "uranium-238",
                    "amount": 19
                }
            ]
        }
    },
    {
        "id": "uranium-ore",
        "name": "Uranium ore",
        "type": "Resource",
        "wiki_link": "https://wiki.factorio.com/Uranium_ore",
        "category": "Intermediate product",
        "recipe": {
            "time": null,
            "yield": null,
            "ingredients": []
        }
    },
    {
        "id": "uranium-processing",
        "name": "Uranium processing",
        "type": "Process",
        "wiki_link": "https://wiki.factorio.com/Uranium_processing",
        "category": "Intermediate product",
        "recipe": {
            "time": 10,
            "yield": null,
            "ingredients": [
                {
                    "id": "uranium-ore",
                    "amount": 10
                },
                {
                    "id": "uranium-235",
                    "amount": 0.007
                },
                {
                    "id": "uranium-238",
                    "amount": 0.993
                }
            ]
        }
    },
    {
        "id": "uranium-rounds-magazine",
        "name": "Uranium rounds magazine",
        "type": "Combat",
        "wiki_link": "https://wiki.factorio.com/Uranium_rounds_magazine",
        "category": "Combat",
        "recipe": {
            "time": 10,
            "yield": 1,
            "ingredients": [
                {
                    "id": "piercing-rounds-magazine",
                    "amount": 1
                },
                {
                    "id": "uranium-238",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "uranium-235",
        "name": "Uranium-235",
        "type": "Resource",
        "wiki_link": "https://wiki.factorio.com/Uranium-235",
        "category": "Intermediate product",
        "recipe": {
            "time": null,
            "yield": null,
            "ingredients": []
        }
    },
    {
        "id": "uranium-238",
        "name": "Uranium-238",
        "type": "Resource",
        "wiki_link": "https://wiki.factorio.com/Uranium-238",
        "category": "Intermediate product",
        "recipe": {
            "time": null,
            "yield": null,
            "ingredients": []
        }
    },
    {
        "id": "used-up-uranium-fuel-cell",
        "name": "Used up uranium fuel cell",
        "type": "Item",
        "wiki_link": "https://wiki.factorio.com/Used_up_uranium_fuel_cell",
        "category": "Intermediate product",
        "recipe": {
            "time": 200,
            "yield": 1,
            "ingredients": [
                {
                    "id": "uranium-fuel-cell",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "water",
        "name": "Water",
        "type": "Liquid",
        "wiki_link": "https://wiki.factorio.com/Water",
        "category": "Intermediate product",
        "recipe": {
            "time": null,
            "yield": null,
            "ingredients": []
        }
    },
    {
        "id": "water-barrel",
        "name": "Water barrel",
        "type": "null",
        "wiki_link": "https://wiki.factorio.com/Water_barrel",
        "category": "Intermediate product",
        "recipe": {
            "time": null,
            "yield": null,
            "ingredients": []
        }
    },
    {
        "id": "wood",
        "name": "Wood",
        "type": "Intermediate product",
        "wiki_link": "https://wiki.factorio.com/Wood",
        "category": "Intermediate product",
        "recipe": {
            "time": 0.5,
            "yield": 2,
            "ingredients": [
                {
                    "id": "raw-wood",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "wooden-chest",
        "name": "Wooden chest",
        "type": "Machinery",
        "wiki_link": "https://wiki.factorio.com/Wooden_chest",
        "category": "Logistics",
        "recipe": {
            "time": 0.5,
            "yield": 1,
            "ingredients": [
                {
                    "id": "wood",
                    "amount": 4
                }
            ]
        }
    }
]