"use client";

import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./features/auth/authSlice";
import { dashboardApi } from "./features/dashboard/items/api";
import { purchaseApi } from "./features/dashboard/purchase/api";

export const stores = configureStore({
    // Root Reducers
    reducer: {
        auth:authReducer,
        [dashboardApi.reducerPath]:dashboardApi.reducer,
        [purchaseApi.reducerPath]:purchaseApi.reducer,
    },
    // Initializing create api middlewares
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware({})
    .concat(
        dashboardApi.middleware,
        purchaseApi.middleware
        )
});

// create types for state and dispatch
export type RootState = ReturnType<typeof stores.getState>
// Store Dispatch Type
export type AppDispatch = typeof stores.dispatch
