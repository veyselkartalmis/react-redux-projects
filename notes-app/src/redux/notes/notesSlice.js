import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
	name: "notes",
	initialState: {
		items: [],
	},
	reducers: {
		addNote: (state, action) => {
			state.items.push(action.payload);
		},
		destroy: (state, action) => {
			const id = action.payload;
			const filtered = state.items.filter((note) => note.id !== id);
			state.items = filtered;
		},
	},
});

export const { addNote, destroy } = noteSlice.actions;
export default noteSlice.reducer;
