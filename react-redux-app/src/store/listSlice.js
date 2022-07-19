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
                edit: false
            })
        },
        deleteTheme(state, action) {
            state.themes = state.themes.filter(theme => theme.id !== action.payload.id)
        },
        updateTheme(state, action) {
            const { title, discription, id } = action.payload
            const themeEdit = state.themes.find(theme => theme.id === id)
            if (themeEdit) {
                themeEdit.discription = discription
                themeEdit.title = title
            }

        },
        findTheme(state, action) { },
        sortDate(state) {
            state = state.themes.time.sort()
        },
        sortTitle(state, action) { },
    },
});

export const { saveTheme, deleteTheme, findTheme, sortTitle, sortDate, updateTheme } = listSlice.actions;

export default listSlice.reducer;