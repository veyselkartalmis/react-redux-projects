import { configureStore } from "@reduxjs/toolkit";

import charactersSlice from "./charactersSlice";
import quotessSlice from "./quotesSlice";

export const store = configureStore({
    reducer: {
        characters: charactersSlice, 
        quotes: quotessSlice, 
    },
});