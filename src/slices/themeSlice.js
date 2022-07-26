import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        value: 'dark'
    },
    reducers: {
        toggleTheme: (state, action) => {
            if (state.value === 'dark') state.value = 'light'
            else state.value = 'dark';
        }
    }
});

export default themeSlice.reducer;
export const { toggleTheme } = themeSlice.actions;