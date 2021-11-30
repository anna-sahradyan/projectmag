import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";



export const fetchUser = createAsyncThunk("users/fetchUser", async (user) => {
    const response = await axios.post("http://jsonplaceholder.typicode.com/users", user);
    console.log(response.data)
    return response.data;

});
const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo:
            {
                username: "Guest",
                email: "test@gmail.com",
                password: "",
            },
        pending: null,
        error: null
    },

    reducers: {

    },
    extraReducers: {
        [fetchUser.pending]: (state) => {
            state.pending = true;
            state.error = false;

        },
        [fetchUser.fulfilled]: (state, action) => {
            state.userInfo = action.payload;
            state.pending = false;
        },
        [fetchUser.rejected]: (state) => {
            state.pending = false;
            state.error = true;
        }
    }
});

export const {fetchStart, fetchSuccess, fetchFailure} = userSlice.actions;
export const selectUser = state => state.user.user;
export const selectUsername = state => state.user.userInfo;
export default userSlice.reducer;