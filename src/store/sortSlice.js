import {createSlice} from "@reduxjs/toolkit";

const sortSlice = createSlice({
    name: 'sort',
    initialState: {
        sort: null,

    },
    reducers: {
        setSort: (state, action) => {
            state.sort = action.payload;

        }
    }
})
export const {setSort} = sortSlice.actions;
export const selectSort = state => state.sort.sort;
export default sortSlice.reducer;
