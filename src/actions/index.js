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