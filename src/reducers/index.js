import {
    NAME_ACTION
} from "../actions";

const initialState = {
    user: {
        currency: 50,
        inventory: []
    },
    game: {
        shop: ["spring_seed", "summer_seed", "fall_seed", "winter_seed", "main_garden_plot", "orchard_plot"]
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
