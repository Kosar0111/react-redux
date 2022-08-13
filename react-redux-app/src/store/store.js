import { configureStore } from "@reduxjs/toolkit";
import listSlice from './listSlice'

export default configureStore({
    reducer: {
        themes: listSlice,
    }
})