import {createSlice} from "@reduxjs/toolkit";

const allGoodsSlice = createSlice({
    name: 'allGoods',
    initialState: {
        allGoods: [],
        loading: false,
        hasErrors: false,
    },
    reducers: {
        getAllGoods: state =>{
            state.loading = true;

        },

        getAllGoodsSuccess: (state, {payload}) => {
            state.allGoods = payload;
            state.loading= false
            state.hasErrors = false
        },
        getAllGoodsFailure: state => {
            state.loading = false
            state.hasErrors = true
        },

    }

})
export const {
    getAllGoods,
    getAllGoodsSuccess,
    getAllGoodsFailure
} = allGoodsSlice.actions;
export const selectAllGoods = state => state.allGoods.allGoods;
export default allGoodsSlice.reducer;
