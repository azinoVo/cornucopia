import {
    BUY_ITEM,
    BUY_PLOT,
    SELL_ITEM,
    REFILL_WATER
} from '../actions';

const initialState = {
    user: {
        essence: 5000,
        favor: 5,
        water: 10,
        inventory:
        {
            spring_seed: 3,
            summer_seed: 1,
            fall_seed: null,
            winter_seed: null,
            main_garden_plot: 2,
            orchard_plot: 1,
            barnyard_plot: 0,
            hanging_plot: 0
        },
        limits: {
            water_limit: 100,
            favor_limit: 100,
            main_garden_plot: 6,
            orchard_plot: 6,
            hanging_plot: 3,
            barnyard_plot: 3,
        },
        main_garden_plot: [
            { id: 0, plotType: "empty_plot.png", water: 1, quality: 2, health: 3 },
            { id: 1, plotType: "empty_plot.png", water: 4, quality: 5, health: 6 },
            { id: 2, plotType: "empty_plot_lock.png", water: 7, quality: 8, health: 9 },
            { Id: 3, plotType: "empty_plot_lock.png", water: 10, quality: 11, health: 12 },
            { id: 4, plotType: "empty_plot_lock.png", water: 13, quality: 14, health: 15 },
            { id: 5, plotType: "empty_plot_lock.png", water: 16, quality: 17, health: 18 }],
        orchard_plot: [
            { id: 0, plotType: "empty_plot.png", water: 1, quality: 2, health: 3 },
            { id: 1, plotType: "empty_plot_lock.png", water: 4, quality: 5, health: 6 },
            { id: 2, plotType: "empty_plot_lock.png", water: 7, quality: 8, health: 9 },
            { Id: 3, plotType: "empty_plot_lock.png", water: 10, quality: 11, health: 12 },
            { id: 4, plotType: "empty_plot_lock.png", water: 13, quality: 14, health: 15 },
            { id: 5, plotType: "empty_plot_lock.png", water: 16, quality: 17, health: 18 }],
        barnyard_plot: [
            { id: 0, trellis: false, plotType: "empty_plot_lock.png", water: 1, quality: 2, health: 3 },
            { id: 1, trellis: false, plotType: "empty_plot_lock.png", water: 4, quality: 5, health: 6 }],
        hanging_plot: [
            { id: 0, pen: false, plotType: "empty_plot_lock.png", water: 1, quality: 2, health: 3 },
            { id: 1, pen: false, plotType: "empty_plot_lock.png", water: 4, quality: 5, health: 6 },
            { id: 2, pen: false,  plotType: "empty_plot_lock.png", water: 7, quality: 8, health: 9 }]
    },
    game: {
        shop: ["spring_seed", "summer_seed", "fall_seed", "winter_seed"],
        plot_shop: ["main_garden_plot", "orchard_plot", "barnyard_plot", "hanging_plot"],
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
        log: ["Welcome to Cornucopia, the Land of Excess. I hope you enjoy your time here today. Have fun!"]
    },
    orchard: ["empty_plot.png", "empty_plot.png"],
    hangingGarden: ["trellis_bare.png", "trellis_bare.png"],
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
                        return (i === action.payload.index) ? { ...content, plotType: "empty_plot.png" } : content
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
                },
                game: {
                    ...state.game,
                    log: [...state.game.log, `User refill the bucket to ${action.payload} capacity at ${Date(Date.now()).toString()}.`]
                }
            }

        default:
            return state;
    }
};

export default rootReducer;
