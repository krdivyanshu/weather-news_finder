import weatherReducer from "./weatherReducer";
import dailyWeath from "./dailyWeath"

import { combineReducers } from "redux";

const rootReducer = combineReducers({
   today : weatherReducer , daily : dailyWeath
})

export default rootReducer;