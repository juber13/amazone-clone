import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/counters/counterSlice';
import productReducer from "./features/counters/productSlice";

export const store = configureStore({
    reducer : {
        cart : cartReducer,
        product : productReducer,
    }
})