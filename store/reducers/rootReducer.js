import { combineReducers } from "redux";
import matchReducer from "./matchReducer";

const rootReducer = combineReducers({
    matchReducer,
})

export default rootReducer