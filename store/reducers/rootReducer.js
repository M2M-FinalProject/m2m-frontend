import { combineReducers } from "redux";
import matchReducer from "./matchReducer";
import fieldReducer from "./fieldsReducer";

const rootReducer = combineReducers({
    matchReducer, fieldReducer
})

export default rootReducer