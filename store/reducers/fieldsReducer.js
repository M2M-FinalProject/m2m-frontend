import { FIELD_FETCH_ERROR, FIELD_FETCH_SUCCESS } from "../actions/matchType";

let initialState = {
    fields : [],
    error : ''
}

function fieldReducer(state = initialState, action){
    switch (action.type) {
        case FIELD_FETCH_SUCCESS:
                return {
                    ...state,
                    fields : action.payload
                }
        case FIELD_FETCH_ERROR:
                return {
                    ...state,
                    error : action.payload
                }
        default:
            return state
    }
}

export default fieldReducer

