import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "auth",
    initialState: {
        isLogin: false,
        userLogin: {}
    },
    reducers: {
        // cac action thay doi state auth
        login: (state, action) => {
            console.log(action.payload)
            state.isLogin = true;
            state.userLogin = action.payload;
        },
        logout: (state, action) => {
            state.isLogin = false;
            state.userLogin = {};
        }
    }
})

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;