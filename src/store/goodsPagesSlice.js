import {createSlice} from "@reduxjs/toolkit";

const goodsPagesSlice = createSlice({
    name: 'goodsPages',
    initialState: {
        goodsPages: [],
        category: [],
    },

    reducers: {
        getGoodsPages: state => ({
            ...state
        }),
        getGoodsPagesSuccess: (state, {payload}) => {
            state.goodsPages = payload;

        },
        getRemoveGoodsPages: (state) => {
            state.goodsPages = [];

        },

    }
});
export const {getGoodsPagesSuccess, getRemoveGoodsPages} = goodsPagesSlice.actions;
export const selectGoodsPages = state => state.goodsPages.goodsPages;
export default goodsPagesSlice.reducer;
