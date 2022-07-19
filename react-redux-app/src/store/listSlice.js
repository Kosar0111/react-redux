import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const listSlice = createSlice({
    name: 'themes',
    initialState: {
        themes: []
    },
    reducers: {
        saveTheme(state, action) {
            state.themes.push({
                id: uuidv4(),
                title: action.payload.title,
                discription: action.payload.discription,
                time: new Date().toString(),
                visible: true
            })
        },
        deleteTheme(state, action) {
            state.themes = state.themes.filter(theme => theme.id !== action.payload.id)
        },
        findTheme(state, action) { },
        sortTitle(state, action) { },
        sortDate(state, action) { },
    },
});

export const { saveTheme, deleteTheme, findTheme, sortTitle, sortDate } = listSlice.actions;

export default listSlice.reducer;