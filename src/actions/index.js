// Actions requiring multiple specific dispatches depending on results from axios call
// export const [
//     ACTION_START,
//     ACTION_SUCCESS,
//     ACTION_FAIL
// ] = [
//         "ACTION_START",
//         "ACTION_SUCCESS",
//         "ACTION_FAIL"
//     ];

// export const nameOfFunctionality = id => dispatch => {
//     dispatch({ type: ACTION_START });
//     axios
//         .delete(`uses the id in the server url here`)
//         .then(res => {
//             dispatch({ type: ACTION_SUCCESS, payload: res.data });
//         })
//         .catch(err => {
//             dispatch({ type: ACTION_FAIL, payload: err });
//         });
// };

// General action 

export const BUY_ITEM = "BUY_ITEM";

// The set will be the item and the price
export const buyItem = set => {
    console.log("set in actions", set)
    return {
        type: BUY_ITEM,
        payload: set
    }
}

export const BUY_PLOT = "BUY_PLOT";

// The set will be the item and the price
export const buyPlot = plotSet => {
    console.log("plotSet in actions", plotSet)
    return {
        type: BUY_PLOT,
        payload: plotSet
    }
}

export const SELL_ITEM = "SELL_ITEM";

// The set will be the item and the price
export const sellItem = set => {
    console.log("set in actions", set)
    return {
        type: SELL_ITEM,
        payload: set
    }
}

export const REFILL_WATER = "REFILL_WATER";

export const fillWater = (water_limit) => {
    console.log("refilling water")
    return {
        type: REFILL_WATER,
        payload: water_limit
    }
}


export const PLANT_SEED = "PLANT_SEED";

export const plantSeed = (seedSet) => {
    console.log("planting seed", seedSet)
    return {
        type: PLANT_SEED,
        payload: {...seedSet}
    }
}

export const PLANT_SAPLING = "PLANT_SAPLING";

export const plantSapling = (seedSet) => {
    console.log("planting sapling", seedSet)
    return {
        type: PLANT_SAPLING,
        payload: {...seedSet}
    }
}

export const EXPAND_WATER = "EXPAND_WATER";

export const expandWater = () => {
    console.log("expand water")
    return {
        type: EXPAND_WATER
    }
}

export const INTERACT_WATER = "INTERACT_WATER";
export const INTERACT_NOURISH = "INTERACT_NOURISH";


export const interact = (actionSet) => dispatch => {
    console.log("interact in actions", actionSet)

    if(actionSet['value'] === "water") {
        dispatch({ type: INTERACT_WATER, payload: actionSet })
    } else if(actionSet['value'] === "nourish") {
        dispatch({ type: INTERACT_NOURISH, payload: actionSet })
    }

}

export const INTERACT_WATER_ORCHARD = "INTERACT_WATER_ORCHARD";
export const INTERACT_NOURISH_ORCHARD = "INTERACT_NOURISH_ORCHARD";
export const INTERACT_CLEAR_ORCHARD = "INTERACT_CLEAR_ORCHARD";
export const INTERACT_REPLENISH_ORCHARD = "INTERACT_REPLENISH_ORCHARD";



export const interactOrchard = (actionSet) => dispatch => {
    console.log("interact in actions ORCHARD", actionSet)

    if(actionSet['value'] === "water") {
        dispatch({ type: INTERACT_WATER_ORCHARD, payload: actionSet })
    } else if(actionSet['value'] === "nourish") {
        dispatch({ type: INTERACT_NOURISH_ORCHARD, payload: actionSet })
    } else if(actionSet['value'] === "clear") {
        dispatch({ type: INTERACT_CLEAR_ORCHARD, payload: actionSet })
    } else if(actionSet['value'] === "replenish") {
        dispatch({ type: INTERACT_REPLENISH_ORCHARD, payload: actionSet })
    }
}


export const STORE_CROP = "STORE_CROP";

export const storeCrop = (crop, index) => {
    console.log("STORE_CROP", crop, index)
    return {
        type: STORE_CROP,
        payload: {crop, index}
    }
}

export const STORE_CROP_ORCHARD = "STORE_CROP_ORCHARD";

export const storeCropOrchard = (crop, index) => {
    console.log("STORE_CROP_ORCHARD", crop, index)
    return {
        type: STORE_CROP_ORCHARD,
        payload: {crop, index}
    }
}

export const SELL_CROP = "SELL_CROP";

export const sellCrop = (crop, index) => {
    console.log("SELL_CROP", crop, index)
    return {
        type: SELL_CROP,
        payload: {crop, index}
    }
}

export const SELL_CROP_ORCHARD = "SELL_CROP_ORCHARD";

export const sellCropOrchard = (crop, index) => {
    console.log("SELL_CROP_ORCHARD", crop, index)
    return {
        type: SELL_CROP_ORCHARD,
        payload: {crop, index}
    }
}

export const SELL_CROP_INVENTORY = "SELL_CROP_INVENT";

export const sellCropInventory = (crop) => {
    console.log("SELL_CROP_INVENTORY", crop)
    return {
        type: SELL_CROP_INVENTORY,
        payload: crop
    }
}

export const NUMBER_WIN = "NUMBER_WIN";

export const numberWin = () => {
    console.log("number game win")
    return {
        type: NUMBER_WIN,
    }
}


export const INTERACT_SPECIAL_SAND = "INTERACT_SPECIAL_SAND";



export const interactSpecial = (actionSet) => dispatch => {
    console.log("interact in actions specials", actionSet)

    if(actionSet[0] === "cornucopian_sand") {
        dispatch({ type: INTERACT_SPECIAL_SAND, payload: actionSet })
    }
}



