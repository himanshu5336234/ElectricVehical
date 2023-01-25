import { combineReducers } from "@reduxjs/toolkit"
import headerReducer from "./Reducer/activeIndexReducer"

const reducers = combineReducers({
   activeheader:headerReducer
})

export default reducers