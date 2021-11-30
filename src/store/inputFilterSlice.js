import {createSlice} from "@reduxjs/toolkit";

const inputFilterSlice = createSlice({
    name: 'inputValue',
    initialState: {
        inputValue: null,
    },
    reducers: {
        setInputValue: (state, action) => {
            state.inputValue = action.payload;

        },

    }
});
export const {setInputValue} = inputFilterSlice.actions;
export const selectInputValue = state => state.inputValue.inputValue;
export default inputFilterSlice.reducer;