import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { serviceApi } from "../api/serviceApi";
import adminReducer from "./admin/slice";

const rootReducer = combineReducers({
    admin: adminReducer,
    [serviceApi.reducerPath]: serviceApi.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(serviceApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;