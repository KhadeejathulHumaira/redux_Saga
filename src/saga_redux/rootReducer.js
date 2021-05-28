import { combineReducers } from "redux";
import postReducer from "./reducer";
import userReducer from "./reducer";


const rootReducer = combineReducers({
   post:postReducer
})

export default rootReducer