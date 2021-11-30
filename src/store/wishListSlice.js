import {createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify";

const wishListSlice  = createSlice({
    name: 'wishList',
    initialState: {
        value:{},


    },
    reducers: {
        getIncrementWishList: (state, data) => {
            let articul = data.payload;
            if (state.value[articul] === undefined) state.value[articul] = 0;
            state.value[articul]++;
            toast.success("Add goods to WishList", {
                position: "bottom-left"
            });
            if(state.value[articul]=1) {
                return;
            }



            localStorage.setItem("wishList", JSON.stringify(state.value));

        },
        getRemoveWishList: (state, data) => {
            let articul = data.payload;
            if (window.confirm('you sure?'))
                delete state.value[articul]
            localStorage.setItem("wishList", JSON.stringify(state.value));
        },

    }


})
export const {getIncrementWishList, getRemoveWishList} = wishListSlice.actions;
export const selectWishList = state => state.wishList.value;
export default wishListSlice.reducer;









