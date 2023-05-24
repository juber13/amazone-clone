import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/counters/counterSlice';

export const store = configureStore({
    reducer : {
        cart : cartReducer
    }
})