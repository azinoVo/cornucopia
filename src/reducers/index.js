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
    INTERACT_SPECIAL_GLASS
} from '../actions';

const initialState = {
    user: {
        energy: 200,
        essence: 500,
        favor: 5,
        water: 95,
        inventory:
        {
            spring_seed: 2,
            summer_seed: 2,
            fall_seed: 2,
            winter_seed: 2,
            tree_sapling: 1,
            main_garden_plot: 2,
            orchard_plot: 1,
            barnyard_plot: 0,
            hanging_plot: 0
        },
        crops: [],
        specials: {
            cornucopian_sand: 0,
            hourglass: 0,
        },
        limits: {
            water_limit: 100,
            energy_limit: 200,
            favor_limit: 100,
            main_garden_plot: 6,
            orchard_plot: 6,
            hanging_plot: 3,
            barnyard_plot: 2,
        },
        main_garden_plot: [
            { id: 0, product: "", plotType: "empty_plot", plotStatus: "_regular", fileType: "png", water: 0, quality: 0, health: 0, harvest: 0, reHarvest: 0 },
            { id: 1, product: "", plotType: "empty_plot", plotStatus: "_regular", fileType: "png", water: 0, quality: 0, health: 0, harvest: 0, reHarvest: 0 },
            { id: 2, product: "", plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 0, quality: 0, health: 0, harvest: 0, reHarvest: 0 },
            { id: 3, product: "", plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 0, quality: 0, health: 0, harvest: 0, reHarvest: 0 },
            { id: 4, product: "", plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 0, quality: 0, health: 0, harvest: 0, reHarvest: 0 },
            { id: 5, product: "", plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 0, quality: 0, health: 0, harvest: 0, reHarvest: 0 }],
        orchard_plot: [
            { id: 0, product: "", plotType: "empty_plot", plotStatus: "_regular", fileType: "png", water: 1, quality: 2, health: 3, harvest: 0, reHarvest: 5 },
            { id: 1, product: "", plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 4, quality: 5, health: 6, harvest: 0, reHarvest: 5 },
            { id: 2, product: "", plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 7, quality: 8, health: 9, harvest: 0, reHarvest: 5 },
            { id: 3, product: "", plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 10, quality: 11, health: 12, harvest: 0, reHarvest: 5 },
            { id: 4, product: "", plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 13, quality: 14, health: 15, harvest: 0, reHarvest: 5 },
            { id: 5, product: "", plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 16, quality: 17, health: 18, harvest: 0, reHarvest: 5 }],
        barnyard_plot: [
            { id: 0, trellis: false, plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 1, quality: 2, health: 3 },
            { id: 1, trellis: false, plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 4, quality: 5, health: 6 }],
        hanging_plot: [
            { id: 0, pen: false, plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 1, quality: 2, health: 3 },
            { id: 1, pen: false, plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 4, quality: 5, health: 6 },
            { id: 2, pen: false, plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 7, quality: 8, health: 9 }]
    },
    game: {
        shop: ["spring_seed", "summer_seed", "fall_seed", "winter_seed", "tree_sapling"],
        plot_shop: ["main_garden_plot", "orchard_plot", "barnyard_plot", "hanging_plot"],
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
            barnyard_plot: 350,
            hanging_plot: 500,
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
        log: ["Welcome to Cornucopia, the Land of Excess. I hope you enjoy your time here today. Good luck and have fun!"]
    },
    sculpture: ["idol_bird.png"]
};

// Switch statements that handle action creators to set the state
const rootReducer = (state = initialState, action) => {

    switch (action.type) {

        case BUY_ITEM:
            console.log("BUY ITEM in reducer", action.payload)
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
            console.log("BUY PLOT in reducer", action.payload)
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
            console.log("SELL ITEM in reducer", action.payload)
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
            console.log("REFILL WATER")
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
            console.log("Plant Seed in reducer", action.payload)
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
            console.log("INTERACT water in reducer", action.payload)
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
            console.log("INTERACT nourish in reducer", action.payload)
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
            console.log("EXPAND WATER CAPACITY")
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
            console.log("STORE CROP in reducer", action.payload)
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
            console.log("SELL CROP in reducer", action.payload)
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
            console.log("SELL CROP from inventory in reducer", action.payload)
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
            console.log("Plant sapling in reducer", action.payload)
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
            console.log("INTERACT water ORCHARD in reducer", action.payload)
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
            console.log("INTERACT nourish ORCHARD in reducer", action.payload)
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
            console.log("INTERACT clear ORCHARD in reducer", action.payload)
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
            console.log("STORE REPLENISH ORCHARD in reducer", action.payload)
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
            console.log("STORE CROP ORCHARD in reducer", action.payload)
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
            console.log("SELL CROP ORCHARD in reducer", action.payload)
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
                console.log("NUMBER WIN")
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
                    console.log("NUMBER WIN")
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
                console.log("special sand in reducer")
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
                        log: [...state.game.log, `The sands have granted its blessing to your plots.`]
                    } 
                };

                case INTERACT_SPECIAL_GLASS:
                console.log("glass in reducer")
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
                        log: [...state.game.log, `The hourglass has sped up time.`]
                    } 
                };

        default:
            return state;
    }
};

export default rootReducer;
