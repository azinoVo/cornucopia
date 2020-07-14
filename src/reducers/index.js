import {
    BUY_ITEM,
    BUY_PLOT,
    SELL_ITEM,
    REFILL_WATER,
    PLANT_SEED,
    INTERACT_WATER,
    INTERACT_NOURISH,
    EXPAND_WATER,
    STORE_CROP,
    SELL_CROP,
    SELL_CROP_INVENTORY,
    PLANT_SAPLING,
    INTERACT_WATER_ORCHARD,
    INTERACT_NOURISH_ORCHARD,
    STORE_CROP_ORCHARD,
    SELL_CROP_ORCHARD,
    INTERACT_CLEAR_ORCHARD,
    INTERACT_REPLENISH_ORCHARD,
    NUMBER_WIN,
    GUESS_WIN,
    INTERACT_SPECIAL_SAND,
    INTERACT_SPECIAL_GLASS,
    CHANGE_DATE,
    SET_STATS,
    SET_CURRENT_ENCOUNTER,
    USER_AUTO,
    USER_CHARGE,
    USER_FIREBALL,
    USER_ULTIMATE_RELEASE,
    ENCOUNTER_DODGED,
    ENCOUNTER_AUTO,
    ENCOUNTER_RAVENOUS_CLAWS,
    ENCOUNTER_DRAGON_BREATH,
    USER_DODGED,
    REWARD_EASY,
    REWARD_HARD,
    OFFER_LOW,
    OFFER_MED,
    OFFER_HIGH,
    OFFER_MAX,
    INSPECT_ENCOUNTER,
    INSPECT_REWARD,
    INSPECT_RESET,
    COLLECT_BOUNTY
} from '../actions';

const initialState = {
    user: {
        stats: {
            gender: 'Male',
            level: 1,
            constitution: 1,
            attack: 1,
            defense: 1,
            dexterity: 1,
            intelligence: 1,
            speed: 1
        },
        battleStats: {
            health: 5,
            attackPower: 2,
            magicPower: 2,
            damageReduction: 0.02,
            dodge: 0.02,
            turnSpeed: 2,
            ultimate: 0
        },
        abilities: [
            { name: 'Auto-Attack', description: '100% AP, +1 ULT-P' },
            { name: 'Charge', description: '+3 ULT-P' },
            { name: 'Fireball', description: '150% MP, +1 ULT-P' },
            { name: 'Ultimate: Release', description: '100% AP + 25% per ULT-P' }
        ],
        skillPoint: 30,
        energy: 195,
        essence: 750,
        favor: 5,
        water: 245,
        inventory:
        {
            spring_seed: 2,
            summer_seed: 2,
            fall_seed: 2,
            winter_seed: 2,
            tree_sapling: 1,
            main_garden_plot: 2,
            orchard_plot: 1,
            forest_plot: 0,
        },
        crops: [],
        specials: {
            cornucopian_sand: 0,
            hourglass: 0,
        },
        limits: {
            water_limit: 250,
            energy_limit: 200,
            favor_limit: 100,
            main_garden_plot: 6,
            orchard_plot: 6,
            forest_plot: 2,
        },
        main_garden_plot: [
            { id: 0, product: "", plotType: "empty_plot", plotStatus: "_regular", fileType: "png", water: 0, quality: 0, health: 0, harvest: 0, reHarvest: 0 },
            { id: 1, product: "", plotType: "empty_plot", plotStatus: "_regular", fileType: "png", water: 0, quality: 0, health: 0, harvest: 0, reHarvest: 0 },
            { id: 2, product: "", plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 0, quality: 0, health: 0, harvest: 0, reHarvest: 0 },
            { id: 3, product: "", plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 0, quality: 0, health: 0, harvest: 0, reHarvest: 0 },
            { id: 4, product: "", plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 0, quality: 0, health: 0, harvest: 0, reHarvest: 0 },
            { id: 5, product: "", plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 0, quality: 0, health: 0, harvest: 0, reHarvest: 0 }
        ],
        orchard_plot: [
            { id: 0, product: "", plotType: "empty_plot", plotStatus: "_regular", fileType: "png", water: 1, quality: 2, health: 3, harvest: 0, reHarvest: 5 },
            { id: 1, product: "", plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 4, quality: 5, health: 6, harvest: 0, reHarvest: 5 },
            { id: 2, product: "", plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 7, quality: 8, health: 9, harvest: 0, reHarvest: 5 },
            { id: 3, product: "", plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 10, quality: 11, health: 12, harvest: 0, reHarvest: 5 },
            { id: 4, product: "", plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 13, quality: 14, health: 15, harvest: 0, reHarvest: 5 },
            { id: 5, product: "", plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 16, quality: 17, health: 18, harvest: 0, reHarvest: 5 }
        ],
        forest_plot: [
            { id: 0, product: "", plotType: "empty_plot", plotStatus: "_lock", fileType: "png", progress: 25, encounter: false, reward: false},
            { id: 1, product: "", plotType: "empty_plot", plotStatus: "_lock", fileType: "png", progress: 25, encounter: false, reward: false}
        ],
        hanging_plot: [
            { id: 0, pen: false, plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 1, quality: 2, health: 3 },
            { id: 1, pen: false, plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 4, quality: 5, health: 6 },
            { id: 2, pen: false, plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 7, quality: 8, health: 9 }
        ]
    },
    game: {
        shop: ["spring_seed", "summer_seed", "fall_seed", "winter_seed", "tree_sapling"],
        plot_shop: ["main_garden_plot", "orchard_plot", "forest_plot"],
        date: 0,
        calendar: [
            { id: 1, type: "spring_seed", date: "Spring Cycle Day I", benefit: "Spring plants are flourishing." },
            { id: 2, type: "spring_seed", date: "Spring Cycle Day II", benefit: "Spring plants are flourishing." },
            { id: 3, type: "spring_seed", date: "Spring Cycle Day III", benefit: "Spring plants are flourishing." },
            { id: 4, type: "spring_seed", date: "Spring Cycle Day IV", benefit: "Spring plants are flourishing." },
            { id: 5, type: "max_spring_seed", date: "Spring Cycle Day V", benefit: "Spring plants look stunning today." },
            { id: 6, type: "summer_seed", date: "Summer Cycle Day I", benefit: "Summer plants are flourishing." },
            { id: 7, type: "summer_seed", date: "Summer Cycle Day II", benefit: "Summer plants are flourishing." },
            { id: 8, type: "summer_seed", date: "Summer Cycle Day III", benefit: "Summer plants are flourishing." },
            { id: 9, type: "summer_seed", date: "Summer Cycle Day IV", benefit: "Summer plants are flourishing." },
            { id: 10, type: "max_summer_seed", date: "Summer Cycle Day V", benefit: "Summer plants look stunning today." },
            { id: 11, type: "autumn_seed", date: "Autumn Cycle Day I", benefit: "Autumn plants are flourishing." },
            { id: 12, type: "autumn_seed", date: "Autumn Cycle Day II", benefit: "Autumn plants are flourishing." },
            { id: 13, type: "autumn_seed", date: "Autumn Cycle Day III", benefit: "Autumn plants are flourishing." },
            { id: 14, type: "autumn_seed", date: "Autumn Cycle Day IV", benefit: "Autumn plants are flourishing." },
            { id: 15, type: "max_autumn_seed", date: "Autumn Cycle Day V", benefit: "Autumn plants look stunning today." },
            { id: 16, type: "winter_seed", date: "Winter Cycle Day I", benefit: "Winter plants are flourishing." },
            { id: 17, type: "winter_seed", date: "Winter Cycle Day II", benefit: "Winter plants are flourishing." },
            { id: 18, type: "winter_seed", date: "Winter Cycle Day III", benefit: "Winter plants are flourishing." },
            { id: 19, type: "winter_seed", date: "Winter Cycle Day IV", benefit: "Winter plants are flourishing." },
            { id: 20, type: "max_winter_seed", date: "Winter Cycle Day V", benefit: "Winter plants look stunning today." },
        ],
        interact_list: [
            // {value: "", label: ""},
        ],
        energyReq: {
            plant_seed: 5,
            plant_sapling: 25,
            water: 5,
            fertilize: 10,
            nourish: 10,
            clear: 50,
            replenish: 100,
        },
        shopPrices: {
            spring_seed: 20,
            summer_seed: 25,
            fall_seed: 30,
            winter_seed: 35,
            tree_sapling: 200,
            main_garden_plot: 100,
            orchard_plot: 200,
            forest_plot: 350,
        },
        cropList: {
            spring_seed: ["Carrot", "Radish", "Potato", "Heart_of_Spring"],
            summer_seed: ["Corn", "Tomato", "Okra", "Heart_of_Summer"],
            fall_seed: ["Broccoli", "Asparagus", "Pumpkin", "Heart_of_Fall"],
            winter_seed: ["Lettuce", "Lettuce", "Lettuce", "Heart_of_Winter"],
            tree_sapling: ["Apple", "Cherry", "Coconut", "Plum", "Essence_of_the_One"]
        },
        cropPrices: {
            spring_seed: {
                Carrot: 100,
                Radish: 125,
                Potato: 150,
                Heart_of_Spring: 500
            },
            summer_seed: {
                Corn: 125,
                Tomato: 175,
                Okra: 200,
                Heart_of_Summer: 750,
            },
            fall_seed: {
                Broccoli: 180,
                Asparagus: 200,
                Pumpkin: 225,
                Heart_of_Fall: 1000
            },
            winter_seed: {
                Lettuce: 200,
                Heart_of_Winter: 2500
            },
            tree_sapling: {
                Apple: 200,
                Cherry: 250,
                Coconut: 275,
                Plum: 300,
                Essence_of_the_One: 1000
            }
        },
        encounters: [
            {
                id: 0,
                name: 'Wolf',
                difficulty: 'easy',
                stats: {
                    health: 50,
                    attackPower: 7,
                    magicPower: 0,
                    damageReduction: 0.1,
                    dodge: 0.05,
                    turnSpeed: 6,
                },
                abilities: ['Auto-Attack', 'Ravenous Claws'],
                rewards: ['Mana Essence', 'Skill Point']
            },
            {
                id: 1,
                name: 'Small Dragon',
                difficulty: 'hard',
                stats: {
                    health: 60,
                    attackPower: 9,
                    magicPower: 10,
                    damageReduction: 0.2,
                    dodge: 0.15,
                    turnSpeed: 8,
                },
                abilities: ['Auto-Attack', 'Dragon Breath'],
                rewards: ['Mana Essence', '2 Skill Point']
            }
        ],
        currentEncounter: {

        },
        log: ["Welcome to Cornucopia, the Land of Excess. I hope you enjoy your time here today. Good luck and have fun!"]
    },
    sculpture: ["idol_bird.png"]
};

// Switch statements that handle action creators to set the state
const rootReducer = (state = initialState, action) => {

    switch (action.type) {

        case BUY_ITEM:

            return {
                ...state,
                user: {
                    ...state.user,
                    essence: state.user.essence - action.payload.price,
                    inventory: {
                        ...state.user.inventory,
                        [action.payload.item]: state.user.inventory[action.payload.item] + 1
                    }
                },
                game: {
                    ...state.game,
                    log: [...state.game.log, `User bought ${action.payload.item} for ${action.payload.price} Mana Essences at ${Date(Date.now()).toString()}`]
                }

            };

        case BUY_PLOT:

            return {
                ...state,
                user: {
                    ...state.user,
                    essence: state.user.essence - action.payload.price,
                    inventory: {
                        ...state.user.inventory,
                        [action.payload.item]: state.user.inventory[action.payload.item] + 1
                    },
                    [action.payload.item]: state.user[action.payload.item].map((content, i) => {
                        return (i === action.payload.index) ? { ...content, plotType: "empty_plot", plotStatus: "_regular", fileType: "png" } : content
                    })
                },
                game: {
                    ...state.game,
                    log: [...state.game.log, `User bought ${action.payload.item} for ${action.payload.price} Mana Essences at ${Date(Date.now()).toString()}`]
                }

            };

        case SELL_ITEM:

            return {
                ...state,
                user: {
                    ...state.user,
                    essence: state.user.essence + Math.ceil(action.payload.price * 0.75),
                    inventory: {
                        ...state.user.inventory,
                        [action.payload.item]: state.user.inventory[action.payload.item] - 1
                    }
                },
                game: {
                    ...state.game,
                    log: [...state.game.log, `User sold ${action.payload.item} for ${Math.ceil(action.payload.price * 0.75)} Mana Essences at ${Date(Date.now()).toString()}`]
                }

            };

        case REFILL_WATER:

            return {
                ...state,
                user: {
                    ...state.user,
                    water: action.payload,
                    favor: state.user.favor + 1
                },
                game: {
                    ...state.game,
                    log: [...state.game.log, `User refilled the bucket to ${action.payload} capacity at ${Date(Date.now()).toString()}.`]
                }
            };

        case PLANT_SEED:

            return {
                ...state,
                user: {
                    ...state.user,
                    energy: state.user.energy - state.game.energyReq.plant_seed,
                    inventory: {
                        ...state.user.inventory,
                        [action.payload['value']]: state.user.inventory[action.payload['value']] - 1
                    },
                    main_garden_plot: state.user.main_garden_plot.map((content, i) => {
                        return (i === action.payload["id"]) ? { ...content, product: action.payload['product'], plotType: `${action.payload["value"]}`, plotStatus: "_regular", fileType: "gif" } : content
                    })
                },
                game: {
                    ...state.game,
                    log: [...state.game.log, `User planted ${action.payload["value"]} within plot ${action.payload["index"]} at ${Date(Date.now()).toString()}.`]
                }
            };

        case INTERACT_WATER:

            return {
                ...state,
                user: {
                    ...state.user,
                    energy: state.user.energy - 5,
                    water: state.user.water - [100 - action.payload.plot.water],
                    favor: state.user.favor + parseInt([100 - action.payload.plot.water] * 0.05),
                    main_garden_plot: state.user.main_garden_plot.map((content, i) => {
                        return (i === action.payload.plot.id) ?
                            {
                                ...content,
                                plotType: `${action.payload.plot.plotType}`,
                                plotStatus: "_watered",
                                fileType: "gif",
                                water: 100,
                                quality: state.user.main_garden_plot[action.payload.plot.id].quality + 5,
                                health: state.user.main_garden_plot[action.payload.plot.id].health + 10,
                                harvest: state.user.main_garden_plot[action.payload.plot.id].harvest + 10
                            } : content
                    })
                },
                game: {
                    ...state.game,
                    log: [...state.game.log, `User watered plot #${[action.payload.plot.id + 1]} by ${[100 - action.payload.plot.water]} at ${Date(Date.now()).toString()}.`]
                }

            };

        case INTERACT_NOURISH:

            return {
                ...state,
                user: {
                    ...state.user,
                    energy: state.user.energy - 10,
                    favor: state.user.favor + 5,
                    main_garden_plot: state.user.main_garden_plot.map((content, i) => {
                        return (i === action.payload.plot.id) ?
                            {
                                ...content,
                                water: state.user.main_garden_plot[action.payload.plot.id].water - 35,
                                quality: state.user.main_garden_plot[action.payload.plot.id].quality + 10,
                                health: state.user.main_garden_plot[action.payload.plot.id].health + 10,
                                harvest: state.user.main_garden_plot[action.payload.plot.id].harvest + 30
                            } : content
                    })
                },
                game: {
                    ...state.game,
                    log: [...state.game.log, `User nourished plot #${[action.payload.plot.id + 1]} at ${Date(Date.now()).toString()}.`]
                }

            };

        case EXPAND_WATER:

            return {
                ...state,
                user: {
                    ...state.user,
                    essence: state.user.essence - 500,
                    favor: state.user.favor + 2,
                    limits: {
                        ...state.user.limits,
                        water_limit: state.user.limits.water_limit + 100,

                    },
                },
                game: {
                    ...state.game,
                    log: [...state.game.log, `User expanded the bucket by 100 units at ${Date(Date.now()).toString()}.`]
                }
            }

        case STORE_CROP:

            return {
                ...state,
                user: {
                    ...state.user,
                    main_garden_plot: state.user.main_garden_plot.map((content, i) => {
                        return (i === action.payload.index) ?
                            {
                                ...content,
                                product: "",
                                plotType: "empty_plot",
                                plotStatus: "_regular",
                                fileType: "png",
                                water: 0,
                                quality: 0,
                                health: 0,
                                harvest: 0
                            } : content
                    }),
                    crops: [
                        ...state.user.crops,
                        {
                            name: action.payload.crop.name,
                            id: Date.now(),
                            amount: 1,
                            value: action.payload.crop.value
                        }
                    ]

                },
                game: {
                    ...state.game,
                    log: [...state.game.log, `User stored ${action.payload.crop.name} worth ${action.payload.crop.value} Mana Essences at ${Date(Date.now()).toString()}.`]
                }
            }

        case SELL_CROP:

            return {
                ...state,
                user: {
                    ...state.user,
                    essence: state.user.essence + action.payload.crop.value,
                    favor: state.user.favor + 10,
                    main_garden_plot: state.user.main_garden_plot.map((content, i) => {
                        return (i === action.payload.index) ?
                            {
                                ...content,
                                product: "",
                                plotType: "empty_plot",
                                plotStatus: "_regular",
                                fileType: "png",
                                water: 0,
                                quality: 0,
                                health: 0,
                                harvest: 0
                            } : content
                    }),
                },
                game: {
                    ...state.game,
                    log: [...state.game.log, `User sold ${action.payload.crop.name} for ${action.payload.crop.value} Mana Essences at ${Date(Date.now()).toString()}.`]
                }
            }

        case SELL_CROP_INVENTORY:

            return {
                ...state,
                user: {
                    ...state.user,
                    essence: state.user.essence + action.payload.value,
                    favor: state.user.favor + 10,
                    crops: state.user.crops.filter((content) => {
                        return (content.id !== action.payload.id)
                    })
                },
                game: {
                    ...state.game,
                    log: [...state.game.log, `User sold ${action.payload.name} for ${action.payload.value} Mana Essences at ${Date(Date.now()).toString()}.`]
                }
            }

        case PLANT_SAPLING:

            return {
                ...state,
                user: {
                    ...state.user,
                    energy: state.user.energy - state.game.energyReq.plant_sapling,
                    inventory: {
                        ...state.user.inventory,
                        [action.payload['value']]: state.user.inventory[action.payload['value']] - 1
                    },
                    orchard_plot: state.user.orchard_plot.map((content, i) => {
                        return (i === action.payload["id"]) ? { ...content, product: action.payload['product'], plotType: `${action.payload["value"]}`, plotStatus: "_regular", fileType: "gif", reHarvest: 5 } : content
                    })
                },
                game: {
                    ...state.game,
                    log: [...state.game.log, `User planted ${action.payload["value"]} within plot #${action.payload["id"] + 1} at ${Date(Date.now()).toString()}.`]
                }
            };

        case INTERACT_WATER_ORCHARD:

            return {
                ...state,
                user: {
                    ...state.user,
                    energy: state.user.energy - 5,
                    water: state.user.water - [100 - action.payload.plot.water],
                    favor: state.user.favor + parseInt([100 - action.payload.plot.water] * 0.065),
                    orchard_plot: state.user.orchard_plot.map((content, i) => {
                        return (i === action.payload.plot.id) ?
                            {
                                ...content,
                                // plotType: `${action.payload.plot.plotType}`,
                                // plotStatus: "_watered",
                                // fileType: "gif", 
                                water: 100,
                                quality: state.user.orchard_plot[action.payload.plot.id].quality + 2,
                                health: state.user.orchard_plot[action.payload.plot.id].health + 2,
                                harvest: state.user.orchard_plot[action.payload.plot.id].harvest + 3
                            } : content
                    })
                },
                game: {
                    ...state.game,
                    log: [...state.game.log, `User watered plot #${[action.payload.plot.id + 1]} in Orchard by ${[100 - action.payload.plot.water]} at ${Date(Date.now()).toString()}.`]
                }
            };

        case INTERACT_NOURISH_ORCHARD:

            return {
                ...state,
                user: {
                    ...state.user,
                    energy: state.user.energy - 10,
                    favor: state.user.favor + 10,
                    orchard_plot: state.user.orchard_plot.map((content, i) => {
                        return (i === action.payload.plot.id) ?
                            {
                                ...content,
                                water: state.user.orchard_plot[action.payload.plot.id].water - 35,
                                quality: state.user.orchard_plot[action.payload.plot.id].quality + 2,
                                health: state.user.orchard_plot[action.payload.plot.id].health + 2,
                                harvest: state.user.orchard_plot[action.payload.plot.id].harvest + 5
                            } : content
                    })
                },
                game: {
                    ...state.game,
                    log: [...state.game.log, `User nourished plot #${[action.payload.plot.id + 1]} in Orchard at ${Date(Date.now()).toString()}.`]
                }

            };

        case INTERACT_CLEAR_ORCHARD:
            return {
                ...state,
                user: {
                    ...state.user,
                    energy: state.user.energy - state.game.energyReq.clear,
                    favor: state.user.favor + 5,
                    orchard_plot: state.user.orchard_plot.map((content, i) => {
                        return (i === action.payload.plot.id) ?
                            {
                                ...content,
                                product: "",
                                plotType: "empty_plot",
                                plotStatus: "_regular",
                                fileType: "png",
                                water: 0,
                                quality: 0,
                                health: 0,
                                harvest: 0
                            } : content
                    })
                },
                game: {
                    ...state.game,
                    log: [...state.game.log, `User cleared plot #${[action.payload.plot.id + 1]} in Orchard at ${Date(Date.now()).toString()}.`]
                }

            };

        case INTERACT_REPLENISH_ORCHARD:
            return {
                ...state,
                user: {
                    ...state.user,
                    orchard_plot: state.user.orchard_plot.map((content, i) => {
                        return (i === action.payload.id) ?
                            {
                                ...content,
                                reHarvest: state.user.orchard_plot[action.payload.id].reHarvest + 2
                            } : content
                    }),
                },
                game: {
                    ...state.game,
                    log: [...state.game.log, `User replenished plot #${action.payload.id} by 2 at ${Date(Date.now()).toString()}.`]
                }
            };

        case STORE_CROP_ORCHARD:
            return {
                ...state,
                user: {
                    ...state.user,
                    orchard_plot: state.user.orchard_plot.map((content, i) => {
                        return (i === action.payload.index) ?
                            {
                                ...content,
                                water: Math.ceil([state.user.orchard_plot[action.payload.index].water] / 2),
                                quality: Math.ceil([state.user.orchard_plot[action.payload.index].quality] / 2),
                                health: Math.ceil([state.user.orchard_plot[action.payload.index].health] / 2),
                                harvest: 25,
                                reHarvest: state.user.orchard_plot[action.payload.index].reHarvest - 1
                            } : content
                    }),
                    crops: [
                        ...state.user.crops,
                        {
                            name: action.payload.crop.name,
                            id: Date.now(),
                            amount: action.payload.crop.amount,
                            value: action.payload.crop.value
                        }
                    ]

                },
                game: {
                    ...state.game,
                    log: [...state.game.log, `User stored ${action.payload.crop.name} worth ${action.payload.crop.value} Mana Essences at ${Date(Date.now()).toString()}.`]
                }
            };

        case SELL_CROP_ORCHARD:
            return {
                ...state,
                user: {
                    ...state.user,
                    essence: state.user.essence + action.payload.crop.value,
                    favor: state.user.favor + 10,
                    orchard_plot: state.user.orchard_plot.map((content, i) => {
                        return (i === action.payload.index) ?
                            {
                                ...content,
                                water: Math.ceil([state.user.orchard_plot[action.payload.index].water] / 2),
                                quality: Math.ceil([state.user.orchard_plot[action.payload.index].quality] / 2),
                                health: Math.ceil([state.user.orchard_plot[action.payload.index].health] / 2),
                                harvest: 25,
                                reHarvest: state.user.orchard_plot[action.payload.index].reHarvest - 1
                            } : content
                    }),
                },
                game: {
                    ...state.game,
                    log: [...state.game.log, `User sold ${action.payload.crop.name} worth ${action.payload.crop.value} Mana Essences at ${Date(Date.now()).toString()}.`]
                }
            };

        case NUMBER_WIN:
            return {
                ...state,
                user: {
                    ...state.user,
                    specials: {
                        ...state.user.specials,
                        cornucopian_sand: state.user.specials.cornucopian_sand + 1
                    }
                },
                game: {
                    ...state.game,
                    log: [...state.game.log, `You felt a special energy encompass you. Your inventory feels much heavier.`]
                }

            };

        case GUESS_WIN:
            return {
                ...state,
                user: {
                    ...state.user,
                    specials: {
                        ...state.user.specials,
                        hourglass: state.user.specials.hourglass + 1
                    }
                },
                game: {
                    ...state.game,
                    log: [...state.game.log, `Time is of the essence. What will you do?`]
                }

            };

        case INTERACT_SPECIAL_SAND:
            return {
                ...state,
                user: {
                    ...state.user,
                    energy: state.user.energy + 100,
                    favor: state.user.favor + 100,
                    specials: {
                        ...state.user.specials,
                        cornucopian_sand: state.user.specials.cornucopian_sand - 1
                    },
                    main_garden_plot: state.user.main_garden_plot.map((content) => {
                        return (content.plotType !== "empty_plot") ?
                            {
                                ...content,
                                water: 100,
                                quality: 95,
                                health: 95,
                                harvest: 50,
                            } : content
                    }),
                    orchard_plot: state.user.orchard_plot.map((content) => {
                        return (content.plotType !== "empty_plot") ?
                            {
                                ...content,
                                water: 100,
                                quality: 95,
                                health: 95,
                                harvest: 50,
                                reHarvest: 5
                            } : content
                    }),

                },
                game: {
                    ...state.game,
                    log: [...state.game.log, `The sands have granted its blessing to your plots at ${Date(Date.now()).toString()}. `]
                }
            };

        case INTERACT_SPECIAL_GLASS:
            return {
                ...state,
                user: {
                    ...state.user,
                    energy: state.user.energy + 100,
                    favor: state.user.favor + 100,
                    specials: {
                        ...state.user.specials,
                        hourglass: state.user.specials.hourglass - 1
                    },
                    main_garden_plot: state.user.main_garden_plot.map((content) => {
                        return (content.plotType !== "empty_plot") ?
                            {
                                ...content,
                                harvest: 95,
                            } : content
                    }),
                    orchard_plot: state.user.orchard_plot.map((content) => {
                        return (content.plotType !== "empty_plot") ?
                            {
                                ...content,
                                harvest: 95,
                            } : content
                    }),

                },
                game: {
                    ...state.game,
                    log: [...state.game.log, `The hourglass has sped up time at at ${Date(Date.now()).toString()}.`]
                }
            };

        case CHANGE_DATE:
            return {
                ...state,
                user: {
                    ...state.user,
                    energy: 200,
                    favor: state.user.favor + 5,
                    main_garden_plot: state.user.main_garden_plot.map((content, index) => {
                        return (content.plotType !== "empty_plot") ?
                            {
                                ...content,
                                harvest: state.user.main_garden_plot[index].harvest + 10,
                            } : content
                    }),
                    orchard_plot: state.user.orchard_plot.map((content, index) => {
                        return (content.plotType !== "empty_plot") ?
                            {
                                ...content,
                                harvest: state.user.orchard_plot[index].harvest + 5,
                            } : content
                    }),
                    forest_plot: state.user.forest_plot.map((content, index) => {
                        return (content.plotStatus !== "_lock") ?
                            {
                                ...content,
                                progress: state.user.forest_plot[index].progress + 30 > 100 ? 100 : state.user.forest_plot[index].progress + 30
                            } : content
                    })
                },
                game: {
                    ...state.game,
                    log: [...state.game.log, `A new day has passed at ${Date(Date.now()).toString()}.`],
                    date: action.payload === 19 ? 0 : state.game.date + 1,
                }
            }


        case SET_STATS:
            return {
                ...state,
                user: {
                    ...state.user,
                    stats: {
                        'gender': action.payload['gender'],
                        'level': action.payload['level'],
                        'constitution': state.user.stats.constitution + action.payload.stats['constitution'],
                        'attack': state.user.stats.attack + action.payload.stats['attack'],
                        'defense': state.user.stats.defense + action.payload.stats['defense'],
                        'dexterity': state.user.stats.dexterity + action.payload.stats['dexterity'],
                        'intelligence': state.user.stats.intelligence + action.payload.stats['intelligence'],
                        'speed': state.user.stats.speed + action.payload.stats['speed']
                    },
                    battleStats: {
                        'health': Math.ceil([state.user.stats.constitution + action.payload.stats['constitution']] * 5),
                        'attackPower': Math.ceil([state.user.stats.attack + action.payload.stats['attack']] * 1.35),
                        'magicPower': Math.ceil([state.user.stats.intelligence + action.payload.stats['intelligence']] * 1.35),
                        'damageReduction': Math.ceil([state.user.stats.defense + action.payload.stats['defense']] * 1.75) / 100,
                        'dodge': Math.ceil([state.user.stats.dexterity + action.payload.stats['dexterity']] * 1.25) / 100,
                        'turnSpeed': Math.ceil([state.user.stats.speed + action.payload.stats['speed']] * 1.15),
                        'ultimate': 0
                    },
                    skillPoint: action.payload.statPoints,
                },
                game: {
                    ...state.game,
                    log: [...state.game.log, `Your character stats have been confirmed at ${Date(Date.now()).toString()}.`],
                }
            };

        case SET_CURRENT_ENCOUNTER:
            return {
                ...state,
                game: {
                    ...state.game,
                    currentEncounter: {
                        ...action.payload
                    },
                    log: [...state.game.log, `A ${action.payload.name} has appeared.`]
                }
            };

        case USER_AUTO:
            return {
                ...state,
                user: {
                    ...state.user,
                    battleStats: {
                        ...state.user.battleStats,
                        ultimate: state.user.battleStats.ultimate + 1 > 10 ? 10 : state.user.battleStats.ultimate + 1
                    }

                },
                game: {
                    ...state.game,
                    currentEncounter: {
                        ...state.game.currentEncounter,
                        stats: {
                            ...state.game.currentEncounter.stats,
                            health: state.game.currentEncounter.stats.health - action.payload.damage > 0 ? state.game.currentEncounter.stats.health - action.payload.damage : 0
                        }
                    },
                    log: [...state.game.log, `User dealt ${action.payload.damage} to ${state.game.currentEncounter.name}.`]

                }
            };

        case ENCOUNTER_DODGED:
            return {
                ...state,
                game: {
                    ...state.game,
                    log: [...state.game.log, `The enemy dodged the attack.`]
                }
            }

        case USER_CHARGE:
            return {
                ...state,
                user: {
                    ...state.user,
                    battleStats: {
                        ...state.user.battleStats,
                        ultimate: state.user.battleStats.ultimate + 3 > 10 ? 10 : state.user.battleStats.ultimate + 3
                    }

                },
                game: {
                    ...state.game,
                    log: [...state.game.log, `User charged Ultimate Gauge by 3.`]

                }
            };

        case USER_FIREBALL:
            return {
                ...state,
                user: {
                    ...state.user,
                    battleStats: {
                        ...state.user.battleStats,
                        ultimate: state.user.battleStats.ultimate + 1
                    }

                },
                game: {
                    ...state.game,
                    currentEncounter: {
                        ...state.game.currentEncounter,
                        stats: {
                            ...state.game.currentEncounter.stats,
                            health: state.game.currentEncounter.stats.health - action.payload.damage > 0 ? state.game.currentEncounter.stats.health - action.payload.damage : 0
                        }
                    },
                    log: [...state.game.log, `User's Fireball dealt ${action.payload.damage} damage to ${action.payload.name}.`]

                }
            };

        case USER_ULTIMATE_RELEASE:
            return {
                ...state,
                user: {
                    ...state.user,
                    battleStats: {
                        ...state.user.battleStats,
                        ultimate: 0
                    }

                },
                game: {
                    ...state.game,
                    currentEncounter: {
                        ...state.game.currentEncounter,
                        stats: {
                            ...state.game.currentEncounter.stats,
                            health: state.game.currentEncounter.stats.health - action.payload.damage > 0 ? state.game.currentEncounter.stats.health - action.payload.damage : 0
                        }
                    },
                    log: [...state.game.log, `User unleashed ${action.payload.damage} damage.`]

                }
            };

        case USER_DODGED:
            return {
                ...state,
                game: {
                    ...state.game,
                    log: [...state.game.log, `User dodged the counterattack at ${Date(Date.now()).toString()}.`]
                }
            }

        case ENCOUNTER_AUTO:
            return {
                ...state,
                user: {
                    ...state.user,
                    battleStats: {
                        ...state.user.battleStats,
                        health: state.user.battleStats.health - action.payload.damage > 0 ? state.user.battleStats.health - action.payload.damage : 0
                    }

                },
                game: {
                    ...state.game,
                    log: [...state.game.log, `${action.payload.name}'s ${action.payload.skill} dealt ${action.payload.damage} damage.`]

                }
            };

        case ENCOUNTER_RAVENOUS_CLAWS:

            return {
                ...state,
                user: {
                    ...state.user,
                    battleStats: {
                        ...state.user.battleStats,
                        health: state.user.battleStats.health - action.payload.damage > 0 ? state.user.battleStats.health - action.payload.damage : 0
                    }

                },
                game: {
                    ...state.game,
                    currentEncounter: {
                        ...state.game.currentEncounter,
                        stats: {
                            ...state.game.currentEncounter.stats,
                            health: state.game.currentEncounter.stats.health + action.payload.healing > 0 ? state.game.currentEncounter.stats.health + action.payload.healing : 0
                        }
                    },
                    log: [...state.game.log, `${action.payload.name}'s ${action.payload.skill} dealt ${action.payload.damage} damage and healed for ${action.payload.healing}.`]

                }
            };

        case ENCOUNTER_DRAGON_BREATH:

            return {
                ...state,
                user: {
                    ...state.user,
                    battleStats: {
                        ...state.user.battleStats,
                        health: state.user.battleStats.health - action.payload.damage > 0 ? state.user.battleStats.health - action.payload.damage : 0,
                        damageReduction: state.user.battleStats.damageReduction - 0.05 > 0 ? state.user.battleStats.damageReduction - 0.05 : 0
                    }

                },
                game: {
                    ...state.game,
                    log: [...state.game.log, `${action.payload.name}'s ${action.payload.skill} dealt ${action.payload.damage} damage and decreased your damage reduction by 5%.`]

                }
            };

        case REWARD_EASY:

            return {
                ...state,
                user: {
                    ...state.user,
                    skillPoint: state.user.skillPoint + 1,
                    essence: state.user.essence + 500,
                },
                game: {
                    ...state.game,
                    currentEncounter: [],
                    log: [...state.game.log, `Rewards: 500 Mana Essence and 1 SKill Point obtained.`]

                }
            }

        case REWARD_HARD:

            return {
                ...state,
                user: {
                    ...state.user,
                    skillPoint: state.user.skillPoint + 2,
                    essence: state.user.essence + 1000,
                },
                game: {
                    ...state.game,
                    currentEncounter: [],
                    log: [...state.game.log, `Rewards: 1000 Mana Essence and 2 Skill Points obtained.`]

                }
            }

        case OFFER_LOW:
            return {
                ...state,
                user: {
                    ...state.user,
                    essence: state.user.essence - action.payload,
                    battleStats: {
                        ...state.user.battleStats,
                        health: state.user.battleStats.health + Math.floor([state.user.stats.constitution * 5] / 4) >= state.user.stats.constitution * 5 ?
                            state.user.stats.constitution * 5 : state.user.battleStats.health + Math.floor([state.user.stats.constitution * 5] / 4)

                    }

                },
                game: {
                    ...state.game,
                    log: [...state.game.log, `User offered ${action.payload} Essences and was healed for 25% max health.`]

                }
            };

        case OFFER_MED:
            return {
                ...state,
                user: {
                    ...state.user,
                    essence: state.user.essence - action.payload,
                    battleStats: {
                        ...state.user.battleStats,
                        health: state.user.battleStats.health + Math.floor([state.user.stats.constitution * 5] / 2) >= state.user.stats.constitution * 5 ?
                            state.user.stats.constitution * 5 : state.user.battleStats.health + Math.floor([state.user.stats.constitution * 5] / 2)

                    }

                },
                game: {
                    ...state.game,
                    log: [...state.game.log, `User offered ${action.payload} Essences and was healed for 50% max health.`]

                }
            };

        case OFFER_HIGH:
            return {
                ...state,
                user: {
                    ...state.user,
                    essence: state.user.essence - action.payload,
                    battleStats: {
                        ...state.user.battleStats,
                        health: Math.ceil(state.user.stats.constitution * 5)

                    }

                },
                game: {
                    ...state.game,
                    log: [...state.game.log, `User offered ${action.payload} Essences and was healed to max.`]

                }
            };

        case OFFER_MAX:
            return {
                ...state,
                user: {
                    ...state.user,
                    essence: state.user.essence - action.payload.amount,
                    skillPoint: state.user.skillPoint + action.payload.skill,
                    battleStats: {
                        ...state.user.battleStats,
                        health: Math.ceil(state.user.stats.constitution * 5)

                    }

                },
                game: {
                    ...state.game,
                    log: [...state.game.log, `User offered ${action.payload.amount} Essences, was healed to max, and gained ${action.payload.skill} SP.`]

                }
            };

            case INSPECT_ENCOUNTER:
                return {
                    ...state,
                    user: {
                        ...state.user,
                        forest_plot: state.user.forest_plot.map((content, index) => {
                            return (content.plotStatus !== "_lock" && index === action.payload) ?
                                {
                                    ...content,
                                    encounter: true
                                } : content
                        })
                    },
                    game: {
                        ...state.game,
                        log: [...state.game.log, `A strange presence lurks in the shadows of the Forest. What will you do?`],
                    }
                }

                case INSPECT_REWARD:
                    return {
                        ...state,
                        user: {
                            ...state.user,
                            forest_plot: state.user.forest_plot.map((content, index) => {
                                return (content.plotStatus !== "_lock" && index === action.payload) ?
                                    {
                                        ...content,
                                        reward: true
                                    } : content
                            })
                        },
                        game: {
                            ...state.game,
                            log: [...state.game.log, `The Forest of Dreams shares its bounty with you. Do you accept?`],
                        }
                    }

                    case INSPECT_RESET:
                        return {
                            ...state,
                            user: {
                                ...state.user,
                                forest_plot: state.user.forest_plot.map((content, index) => {
                                    return (content.plotStatus !== "_lock" && index === action.payload) ?
                                        {
                                            ...content,
                                            reward: false,
                                            encounter: false,
                                            progress: 0
                                        } : content
                                })
                            },
                            game: {
                                ...state.game,
                                log: [...state.game.log, `The Forest of Dreams sends her regards.`],
                            }
                        }

                        case COLLECT_BOUNTY:
                            return {
                                ...state,
                                user: {
                                    ...state.user,
                                    essence: state.user.essence+action.payload
                                },
                                game: {
                                    ...state.game,
                                    log: [...state.game.log, `The Forest of Dreams grants you ${action.payload} mana essences.`],
                                }
                            }

        default:
            return state;
    }
};

export default rootReducer;
