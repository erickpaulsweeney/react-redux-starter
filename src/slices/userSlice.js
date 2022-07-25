import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'userInfo',
    initialState: { user: { name: 'John Smith', email: 'johnsmith@gmail.com', location: 'USA' } },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state, action) => {
            state.user = {};
        }
    }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;