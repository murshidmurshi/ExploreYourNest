import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "../slices/theme";

const store = configureStore({
    reducer: {
        //Define slice here
        theme:ThemeSlice,
    }
});

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;

export default store;