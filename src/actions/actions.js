export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export function addFeature(action) {
    return{
        type: ADD_FEATURE,
        payload: action
    }
}

export function removeFeature(action) {
    return{
        type: REMOVE_FEATURE,
        payload: action
    }
}