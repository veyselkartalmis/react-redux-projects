import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const contactAdaptor = createEntityAdapter();
const initialState = contactAdaptor.getInitialState();

export const contactSelectors = contactAdaptor.getSelectors(state => state.contacts);

const contactSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact: contactAdaptor.addOne,
        addContacts: contactAdaptor.addMany,
        deleteContact: contactAdaptor.removeOne,
        removeAll: contactAdaptor.removeAll,
    }
});

export const { addContact, addContacts, deleteContact, removeAll } = contactSlice.actions;
export default contactSlice.reducer;