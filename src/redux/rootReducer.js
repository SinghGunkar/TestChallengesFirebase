import { combineReducers } from "redux"
import authReducer from "./reducers/authReducer"
import testCasesReducer from "./reducers/testCasesReducer"

const rootReducer = combineReducers({
    auth: authReducer,
    testCases: testCasesReducer
})

export default rootReducer
