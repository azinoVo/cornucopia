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

    return {
        type: BUY_ITEM,
        payload: set
    }
}

export const BUY_PLOT = "BUY_PLOT";

// The set will be the item and the price
export const buyPlot = plotSet => {
    return {
        type: BUY_PLOT,
        payload: plotSet
    }
}

export const SELL_ITEM = "SELL_ITEM";

// The set will be the item and the price
export const sellItem = set => {
    return {
        type: SELL_ITEM,
        payload: set
    }
}

export const REFILL_WATER = "REFILL_WATER";

export const fillWater = (water_limit) => {
    return {
        type: REFILL_WATER,
        payload: water_limit
    }
}


export const PLANT_SEED = "PLANT_SEED";

export const plantSeed = (seedSet) => {

    return {
        type: PLANT_SEED,
        payload: { ...seedSet }
    }
}

export const PLANT_SAPLING = "PLANT_SAPLING";

export const plantSapling = (seedSet) => {

    return {
        type: PLANT_SAPLING,
        payload: { ...seedSet }
    }
}

export const EXPAND_WATER = "EXPAND_WATER";

export const expandWater = () => {

    return {
        type: EXPAND_WATER
    }
}

export const INTERACT_WATER = "INTERACT_WATER";
export const INTERACT_NOURISH = "INTERACT_NOURISH";


export const interact = (actionSet) => dispatch => {


    if (actionSet['value'] === "water") {
        dispatch({ type: INTERACT_WATER, payload: actionSet })
    } else if (actionSet['value'] === "nourish") {
        dispatch({ type: INTERACT_NOURISH, payload: actionSet })
    }

}

export const INTERACT_WATER_ORCHARD = "INTERACT_WATER_ORCHARD";
export const INTERACT_NOURISH_ORCHARD = "INTERACT_NOURISH_ORCHARD";
export const INTERACT_CLEAR_ORCHARD = "INTERACT_CLEAR_ORCHARD";
export const INTERACT_REPLENISH_ORCHARD = "INTERACT_REPLENISH_ORCHARD";



export const interactOrchard = (actionSet) => dispatch => {


    if (actionSet['value'] === "water") {
        dispatch({ type: INTERACT_WATER_ORCHARD, payload: actionSet })
    } else if (actionSet['value'] === "nourish") {
        dispatch({ type: INTERACT_NOURISH_ORCHARD, payload: actionSet })
    } else if (actionSet['value'] === "clear") {
        dispatch({ type: INTERACT_CLEAR_ORCHARD, payload: actionSet })
    } else if (actionSet['value'] === "replenish") {
        dispatch({ type: INTERACT_REPLENISH_ORCHARD, payload: actionSet })
    }
}


export const STORE_CROP = "STORE_CROP";

export const storeCrop = (crop, index) => {

    return {
        type: STORE_CROP,
        payload: { crop, index }
    }
}

export const STORE_CROP_ORCHARD = "STORE_CROP_ORCHARD";

export const storeCropOrchard = (crop, index) => {

    return {
        type: STORE_CROP_ORCHARD,
        payload: { crop, index }
    }
}

export const SELL_CROP = "SELL_CROP";

export const sellCrop = (crop, index) => {

    return {
        type: SELL_CROP,
        payload: { crop, index }
    }
}

export const SELL_CROP_ORCHARD = "SELL_CROP_ORCHARD";

export const sellCropOrchard = (crop, index) => {

    return {
        type: SELL_CROP_ORCHARD,
        payload: { crop, index }
    }
}

export const SELL_CROP_INVENTORY = "SELL_CROP_INVENT";

export const sellCropInventory = (crop) => {

    return {
        type: SELL_CROP_INVENTORY,
        payload: crop
    }
}

export const NUMBER_WIN = "NUMBER_WIN";

export const numberWin = () => {

    return {
        type: NUMBER_WIN,
    }
}


export const GUESS_WIN = "GUESS_WIN";

export const guessWin = () => {

    return {
        type: GUESS_WIN,
    }
}

export const INTERACT_SPECIAL_SAND = "INTERACT_SPECIAL_SAND";
export const INTERACT_SPECIAL_GLASS = "INTERACT_SPECIAL_GLASS";



export const interactSpecial = (actionSet) => dispatch => {

    if (actionSet[0] === "cornucopian_sand") {
        dispatch({ type: INTERACT_SPECIAL_SAND, payload: actionSet })
    } else if (actionSet[0] === "hourglass") {
        dispatch({ type: INTERACT_SPECIAL_GLASS, payload: actionSet })
    }
}


export const CHANGE_DATE = "CHANGE_DATE";

export const progressDate = (day) => {

    return {
        type: CHANGE_DATE,
        payload: day,
    }
}

export const SET_STATS = "SET_STATS";

export const setCharacterStats = (stats) => {

    return {
        type: SET_STATS,
        payload: stats,
    }
}

export const SET_CURRENT_ENCOUNTER = "SET_CURRENT_ENCOUNTER";

export const setEncounterInfo = (encounter) => {

    return {
        type: SET_CURRENT_ENCOUNTER,
        payload: encounter,
    }
}

export const USER_AUTO = "USER_AUTO";
export const USER_CHARGE = "USER_CHARGE";
export const USER_FIREBALL = "USER_FIREBALL";
export const USER_ULTIMATE_RELEASE = "USER_ULTIMATE_RELEASE";
export const ENCOUNTER_DODGED = "ENCOUNTER_DODGED";

export const userBattleAction = (userStats, encounterStats, ability) => dispatch => {

    switch (ability) {
        case 'Encounter-Dodged':
            dispatch({
                type: ENCOUNTER_DODGED
            })
            break;
        case 'Auto-Attack':
            dispatch({
                type: USER_AUTO,
                payload: {
                    damage: Math.floor([userStats.attackPower] - [userStats.attackPower * encounterStats.stats.damageReduction]) > 0 ?
                        Math.floor(userStats.attackPower - [userStats.attackPower * encounterStats.stats.damageReduction]) : 0,
                    name: encounterStats.name
                }
            })
            break;
        case 'Fireball':
            dispatch({
                type: USER_FIREBALL,
                payload: {
                    damage: Math.floor([Math.floor(userStats.magicPower * 1.5)] - [Math.floor(userStats.magicPower * 1.5) * encounterStats.stats.damageReduction]) > 0 ?
                        Math.floor([Math.floor(userStats.magicPower * 1.5)] - [Math.floor(userStats.magicPower * 1.5) * encounterStats.stats.damageReduction]) : 0,
                    name: encounterStats.name
                }
            })
            break;
        case 'Charge':
            dispatch({
                type: USER_CHARGE
            })
            break;
        case 'Ultimate: Release':
            dispatch({
                type: USER_ULTIMATE_RELEASE,
                payload: {
                    damage: Math.floor([[[25 / 100] * userStats.ultimate + 1] * userStats.attackPower] - [[[[25 / 100] * userStats.ultimate + 1] * userStats.attackPower] * encounterStats.stats.damageReduction])
                }
            })
            break;
        default:
            console.log('Default for actions')
    }
}

export const ENCOUNTER_AUTO = "ENCOUNTER_AUTO";
export const ENCOUNTER_RAVENOUS_CLAWS = "ENCOUNTER_RAVENOUS_CLAWS";
export const ENCOUNTER_DRAGON_BREATH = "ENCOUNTER_DRAGON_BREATH";
export const USER_DODGED = "USER_DODGED";

export const encounterBattleAction = (userStats, encounterStats, ability) => dispatch => {

    switch (ability) {
        case 'User-Dodged':
            dispatch({
                type: USER_DODGED
            })
            break;
        case 'Auto-Attack':
            dispatch({
                type: ENCOUNTER_AUTO,
                payload: {
                    damage: Math.floor([encounterStats.stats.attackPower] - [encounterStats.stats.attackPower * userStats.damageReduction]),
                    name: encounterStats.name,
                    skill: ability
                }
            })
            break;
        case 'Ravenous Claws':
            dispatch({
                type: ENCOUNTER_RAVENOUS_CLAWS,
                payload: {
                    damage: Math.floor([encounterStats.stats.attackPower * 1.25] - [[encounterStats.stats.attackPower * 1.25] * userStats.damageReduction]),
                    healing: Math.floor([encounterStats.stats.attackPower * 1.25] * 0.35),
                    name: encounterStats.name,
                    skill: ability
                }
            })

            break;
        case 'Dragon Breath':
            dispatch({
                type: ENCOUNTER_DRAGON_BREATH,
                payload: {
                    damage: Math.floor([encounterStats.stats.attackPower * 1.35] - [[encounterStats.stats.attackPower * 1.35] * userStats.damageReduction]),
                    name: encounterStats.name,
                    skill: ability
                }
            })

            break;
        default:
            console.log('Default for encounter actions')
    }
}

export const REWARD_EASY = "REWARD_EASY";
export const REWARD_HARD = "REWARD_HARD";


export const reward = difficulty => dispatch => {

    switch (difficulty) {
        case 'easy':
            dispatch({
                type: REWARD_EASY
            })
            break;
        case 'hard':
            dispatch({
                type: REWARD_HARD
            })
            break;
        default:
            console.log('Default for rewards')
    }
}

export const OFFER_LOW = "OFFER_LOW";
export const OFFER_MED = "OFFER_MED";
export const OFFER_HIGH = "OFFER_HIGH";
export const OFFER_MAX = "OFFER_MAX";

export const offerEssence = (value, tier) => {
    // Tier depends on the amount and probability
    switch (tier) {
        case 'low':
            dispatch({
                type: OFFER_LOW,
                payload: value
            })
            break;
        case 'med':
            dispatch({
                type: OFFER_MED,
                payload: value

            })
            break;
        case 'high':
            dispatch({
                type: OFFER_HIGH,
                payload: value

            })
            break;
        case 'max':
            dispatch({
                type: OFFER_MAX,
                payload: value

            })
            break;
        default:
            console.log('Default for offering')
    }

}





