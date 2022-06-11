import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
	name: "notes",
	initialState: {
		items: [],
		activeFilter: "",
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
		search: (state, action) => {
			state.activeFilter = action.payload;
		}
	},
});

export const { addNote, destroy, search } = noteSlice.actions;
export default noteSlice.reducer;
