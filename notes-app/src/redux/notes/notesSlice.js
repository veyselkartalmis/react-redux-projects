import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
	name: "notes",
	initialState: {
		notes: [],
	},
	reducers: {
		addNote: (state, action) => {
			state.notes.push(action.payload);
		},
		destroy: (state, action) => {
			const id = action.payload;
			const filtered = state.notes.filter((note) => note.id !== id);
            state.note = filtered;
		},
	},
});

export const { addNote, destroy} = noteSlice.actions;
export default noteSlice.reducer;
