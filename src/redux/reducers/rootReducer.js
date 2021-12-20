import { combineReducers } from "redux"
import authReducer from "./authReducer"
import testCasesReducer from "./testCasesReducer"

export const rootReducer = combineReducers({
    auth: authReducer,
    testCases: testCasesReducer
})
