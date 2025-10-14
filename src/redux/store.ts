import { combineReducers, configureStore } from "@reduxjs/toolkit";
import adminReducer from "./admin/slice";
import { api } from "./api/api";

const rootReducer = combineReducers({
    admin: adminReducer,
    [api.reducerPath]: api.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;