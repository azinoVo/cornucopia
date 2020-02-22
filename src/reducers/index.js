import {
    NAME_ACTION
} from "../actions";

const initialState = {
    user: {
        currency: 50,
        inventory:
            {
                "spring_seed": 3,
                "summer_seed": 1,
                "fall_seed": 4,
                "winter_seed": 2,
                "main_garden_plot": 2,
                "orchard_plot": 2
            }
    },
    game: {
        shop: ["spring_seed", "summer_seed", "fall_seed", "winter_seed", "main_garden_plot", "orchard_plot"],
        shopPrices: {
            spring_seed: 20,
            summer_seed: 25,
            fall_seed: 30,
            winter_seed: 30,
            main_garden_plot: 100,
            orchard_plot: 200
        }
    },
    orchard: ["adult_tree.png", "adult_tree.png", "adult_tree.png", "adult_tree.png", "adult_tree.png", "adult_tree.png"],
    mainGarden: ["adult_tree.png", "empty_plot.png", "seed_down.gif", "watered.gif", "watered_seed.png", "watered.gif"],
    
};

// Switch statements that handle action creators to set the state
const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case NAME_ACTION:
            return {
                ...state,
                orchard: [...state.orchard, action.payload]
            };

        default:
            return state;
    }
};

export default rootReducer;
