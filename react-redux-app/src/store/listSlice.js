import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const listSlice = createSlice({
  name: "lists",

  initialState: {
    lists: [],
    editMode: false,
    new: false,
  },
  reducers: {
    saveTheme(state, action) {
      state.lists.push({
        id: uuidv4(),
        title: action.payload.title.trim(),
        description: action.payload.description.trim(),
        time: new Date().toString(),
      });
    },
    deleteTheme(state, action) {
      state.lists = state.lists.filter((list) => list.id !== action.payload.id);
    },
    newTheme(state) {
      state.new = !state.new;
    },
    toggleEdit(state) {
      state.editMode = !state.editMode;
    },
    updateTheme(state, action) {
      const themeEdit = state.lists.find(
        (list) => list.id === action.payload.id
      );

      if (themeEdit) {
        themeEdit.description = action.payload.description;
        themeEdit.title = action.payload.title;
      }
    },
    sortDate(state) {
      state.lists.sort((a, b) => b.time.localeCompare(a.time));
    },
    sortTitle(state) {
      state.lists.sort((a, b) => a.title.localeCompare(b.title));
    },
  },
});

export const {
  saveTheme,
  deleteTheme,
  sortTitle,
  sortDate,
  updateTheme,
  toggleEdit,
  newTheme,
} = listSlice.actions;

export default listSlice.reducer;
