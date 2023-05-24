import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name : 'cart',
    initialState : [],
    reducers : {
        addToCart  : (state , action) => {
            state.push(action.payload);
        },

        removeToCart : (state , action) => {
            // console.log("also working")
            return state.filter((item) => item.id !== action.payload);
        },

        // reset : (state) => {
        //     console.log('it/s also working');
        // }
    }
})

export const {addToCart , removeToCart , reset} = cartSlice.actions;
// export const selectCount = (state) => state.counter.value;
export default cartSlice.reducer;