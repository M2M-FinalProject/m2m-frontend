import { MATCH_FETCH_ERROR, MATCH_FETCH_SUCCESS } from "../actions/matchType";

let initialState = {
    matches : [],
    error : ''
}

function matchReducer(state = initialState, action){
    switch (action.type) {
        case MATCH_FETCH_SUCCESS:
                return {
                    ...state,
                    matches : action.payload
                }
        case MATCH_FETCH_ERROR:
                return {
                    ...state,
                    error : action.payload
                }
        default:
            return state
    }
}

export default matchReducer

