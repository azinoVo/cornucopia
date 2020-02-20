import {
    NAME_ACTION
} from "../actions";

const initialState = {
    orchard: ["adult_tree.png", "adult_tree.png", "adult_tree.png", "adult_tree.png", "adult_tree.png", "adult_tree.png"]
};

// Switch statements that handle action creators to set the state
const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case NAME_ACTION:
            return {
                ...state,
                foodEntries: [...state.foodEntries, action.payload]
            };

        default:
            return state;
    }
};

export default rootReducer;
