import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./redux/notes/notesSlice";
export default configureStore({
    reducer: { notes: noteSlice },
});