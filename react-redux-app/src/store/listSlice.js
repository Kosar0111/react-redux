import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const getThemes = createAsyncThunk(
  "lists/getThemes",
  async (_, rejectWithValue) => {
    return await axios
      .get("http://localhost:3001/themes")
      .then(res => res.data)
      .catch(err => rejectWithValue(err.message));
  }
);

export const addThemes = createAsyncThunk(
  "lists/addThemes",
  async (value, { rejectWithValue }) => {
    return await axios
      .post("http://localhost:3001/themes", {
        id: uuidv4(),
        title: value.title.trim(),
        description: value.description.trim(),
        time: JSON.stringify(Date.now()),
      })
      .then(res => res.data)
      .catch(err => rejectWithValue(err.res.data));
  }
);

export const deleteThemes = createAsyncThunk(
  "lists/deleteThemes",
  async (id, { rejectWithValue }) => {
    return await axios
      .delete(`http://localhost:3001/themes/${id}`)
      .then(res => id)
      .catch(err => rejectWithValue(err.res));
  }
);

export const updateThemes = createAsyncThunk(
  "lists/updateThemes",
  async (value, { rejectWithValue }) => {
    return await axios
      .patch(`http://localhost:3001/themes/${value.id}`, {
        title: value.title.trim(),
        description: value.description.trim(),
      })
      .then(res => res.data)
      .catch(err => rejectWithValue(err.res));
  }
);
const listSlice = createSlice({
  name: "lists",

  initialState: {
    lists: [],
    editMode: false,
    newItemMode: false,
    editThemeId: "",
    loading: false,
    error: "",
  },
  reducers: {
    saveTheme(state, action) {
      state.lists.push({
        id: action.payload.id,
        title: action.payload.title.trim(),
        description: action.payload.description.trim(),
        time: action.payload.time,
      });
    },
    deleteTheme(state, action) {
      state.lists = state.lists.filter(list => list.id !== action.payload);
    },
    findEditThemeId(state, action) {
      state.editThemeId = action.payload.id;
    },
    newTheme(state) {
      state.newItemMode = !state.newItemMode;
    },
    toggleEdit(state) {
      state.editMode = !state.editMode;
    },
    updateTheme(state, action) {
      const themeEdit = state.lists.find(list => list.id === action.payload.id);
      if (themeEdit) {
        themeEdit.description = action.payload.description;
        themeEdit.title = action.payload.title;
      }
    },
    sortDate(state) {
      state.lists.sort((a, b) => b.time.localeCompare(a.time));
      console.log(state);
    },
    sortTitle(state) {
      state.lists.sort((a, b) => a.title.localeCompare(b.title));
    },
  },
  extraReducers: builder => {
    builder.addCase(getThemes.pending, state => {
      state.loading = true;
    });
    builder.addCase(getThemes.fulfilled, (state, action) => {
      state.loading = false;
      state.lists = action.payload;
      state.error = "";
    });
    builder.addCase(getThemes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(deleteThemes.pending, state => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(deleteThemes.fulfilled, (state, action) => {
      state.loading = false;
      listSlice.caseReducers.deleteTheme(state, action);
      state.error = "";
    });
    builder.addCase(deleteThemes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(addThemes.pending, state => {
      state.loading = true;
    });
    builder.addCase(addThemes.fulfilled, (state, action) => {
      state.loading = false;
      listSlice.caseReducers.saveTheme(state, action);
      state.error = "";
    });
    builder.addCase(addThemes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(updateThemes.pending, state => {
      state.loading = true;
    });
    builder.addCase(updateThemes.fulfilled, (state, action) => {
      state.loading = false;
      listSlice.caseReducers.updateTheme(state, action);
      state.error = "";
    });
    builder.addCase(updateThemes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
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
  findEditThemeId,
} = listSlice.actions;

export default listSlice.reducer;
