import {
    BUY_ITEM,
    BUY_PLOT,
    SELL_ITEM,
    REFILL_WATER,
    PLANT_SEED,
    INTERACT_WATER,
    INTERACT_NOURISH,
    EXPAND_WATER,
} from '../actions';

const initialState = {
    user: {
        energy: 200,
        essence: 5000,
        favor: 5,
        water: 2000,
        inventory:
        {
            spring_seed: 3,
            summer_seed: 1,
            fall_seed: 0,
            winter_seed: 0,
            main_garden_plot: 2,
            orchard_plot: 1,
            barnyard_plot: 0,
            hanging_plot: 0
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
            { id: 0, product: "", plotType: "empty_plot", plotStatus: "_regular", fileType: "png", water: 0, quality: 0, health: 0, harvest: 100},
            { id: 1, product: "", plotType: "empty_plot", plotStatus: "_regular", fileType: "png", water: 0, quality: 0, health: 0, harvest: 0},
            { id: 2, product: "", plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 0, quality: 0, health: 0, harvest: 0 },
            { id: 3, product: "", plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 0, quality: 0, health: 0, harvest: 0 },
            { id: 4, product: "", plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 0, quality: 0, health: 0, harvest: 0 },
            { id: 5, product: "", plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 0, quality: 0, health: 0, harvest: 0 }],
        orchard_plot: [
            { id: 0, plotType: "empty_plot", plotStatus: "_regular", fileType: "png", water: 1, quality: 2, health: 3 },
            { id: 1, plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 4, quality: 5, health: 6 },
            { id: 2, plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 7, quality: 8, health: 9 },
            { id: 3, plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 10, quality: 11, health: 12 },
            { id: 4, plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 13, quality: 14, health: 15 },
            { id: 5, plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 16, quality: 17, health: 18 }],
        barnyard_plot: [
            { id: 0, trellis: false, plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 1, quality: 2, health: 3 },
            { id: 1, trellis: false, plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 4, quality: 5, health: 6 }],
        hanging_plot: [
            { id: 0, pen: false, plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 1, quality: 2, health: 3 },
            { id: 1, pen: false, plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 4, quality: 5, health: 6 },
            { id: 2, pen: false,  plotType: "empty_plot", plotStatus: "_lock", fileType: "png", water: 7, quality: 8, health: 9 }]
    },
    game: {
        shop: ["spring_seed", "summer_seed", "fall_seed", "winter_seed"],
        plot_shop: ["main_garden_plot", "orchard_plot", "barnyard_plot", "hanging_plot"],
        interact_list: [
            // {value: "", label: ""},
        ],
        energyReq: {
            plant_seed: 5,
            water: 5,
            fertilize: 10,
            nourish: 10
        },
        shopPrices: {
            spring_seed: 20,
            summer_seed: 25,
            fall_seed: 30,
            winter_seed: 35,
            main_garden_plot: 100,
            orchard_plot: 200,
            barnyard_plot: 350,
            hanging_plot: 500,
        },
        cropList: {
            spring_seed: ["carrot", "radish", "potato", "Heart of Spring"],
            summer_seed: ["corn", "tomato", "okra", "Heart of Summer" ],
            fall_seed: ["broccoli", "asparagus", "scallions", "Heart of Fall"],
            winter_seed: ["lettuce", "lettuce", "lettuce", "Heart of Winter"]
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
                        return (i === action.payload["index"]) ? { ...content, plotType: `${action.payload["value"]}`, plotStatus:"_regular", fileType: "gif" } : content
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
                    favor: state.user.favor + parseInt([100-action.payload.plot.water]*0.05),
                    main_garden_plot: state.user.main_garden_plot.map((content, i) => {
                        return (i === action.payload.plot.id) ? 
                        { ...content, 
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
                    log: [...state.game.log, `User watered plot #${[action.payload.plot.id+1]} by ${[100 - action.payload.plot.water]} at ${Date(Date.now()).toString()}.`]
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
                            { ...content, 
                            water: state.user.main_garden_plot[action.payload.plot.id].water - 15,
                            quality: state.user.main_garden_plot[action.payload.plot.id].quality + 5,
                            health: state.user.main_garden_plot[action.payload.plot.id].health + 10,
                            harvest: state.user.main_garden_plot[action.payload.plot.id].harvest + 15
                        } : content
                        })
                    },
                    game: {
                        ...state.game,
                        log: [...state.game.log, `User nourished plot #${[action.payload.plot.id+1]} at ${Date(Date.now()).toString()}.`]
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
                        water_limit: state.user.limits.water_limit+100,
                        
                    },
                },
                game: {
                    ...state.game,
                    log: [...state.game.log, `User expanded the bucket by 100 units at ${Date(Date.now()).toString()}.`]
                }
            }

        default:
            return state;
    }
};

export default rootReducer;
