import {createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        // value: localStorage.getItem("cartItem")?JSON.parse(localStorage.getItem("cartItem")): {},
        value: {},


    },
    reducers: {
        getIncrement: (state, data) => {
            let articul = data.payload;
            if (state.value[articul] === undefined) state.value[articul] = 0;
            state.value[articul]++;
            toast.success("Add goods to cart", {
                position: "bottom-left"
            });

            localStorage.setItem("cartItem", JSON.stringify(state.value));

        },
        getMinus: (state, data) => {
            let articul = data.payload;
            state.value[articul]--;
            if (state.value[articul] === 0) {

                delete state.value[articul];
            }
            localStorage.setItem("cartItem", JSON.stringify(state.value));
        },
        getRemove: (state, data) => {
            let articul = data.payload;
            if (window.confirm('Are You Sure?'))
                delete state.value[articul]
            localStorage.setItem("cartItem", JSON.stringify(state.value));
        },

    }


})
export const {getIncrement, getMinus, getRemove} = cartSlice.actions;
export const selectCart = state => state.cart.value;
export default cartSlice.reducer;


