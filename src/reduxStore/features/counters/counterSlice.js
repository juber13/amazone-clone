import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name : "counter",
    initialState : 10,
    reducers : {
        addToCart  : (state) => {
            console.log("adding")
        },

        removeToCart : (state) => {
            console.log("also working")
        },

        reset : (state) => {
            console.log('it/s also working');
        }
    }
})

export const {addToCart , removeToCart , reset} = counterSlice.actions;
export const selectCount = (state) => state.counter.value;
export default counterSlice.reducer;