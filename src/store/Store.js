import { configureStore } from "@reduxjs/toolkit";
import ReminderSlice from "../reducers/ReminderSlice";


export const store = configureStore({
    reducer: ReminderSlice
})