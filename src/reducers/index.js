import {
    NAME_ACTION
} from "../actions";

const initialState = {
    orchard: ["adult_tree.png", "adult_tree.png", "adult_tree.png", "adult_tree.png", "adult_tree.png", "adult_tree.png"],
    mainGarden: ["adult_tree.png", "empty_plot.png", "seed_down.gif", "watered.gif", "watered_seed.png", "watered.gif"]
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
