import { configureStore } from "@reduxjs/toolkit"

import authReducer from "./reducers/authReducer"
import testCasesReducer from "./reducers/testCasesReducer"

import { setupListeners } from "@reduxjs/toolkit/dist/query"
import { postsAPI } from "./services/posts"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        testCases: testCasesReducer,
        [postsAPI.reducerPath]: postsAPI.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(postsAPI.middleware)
})

setupListeners(store.dispatch)
