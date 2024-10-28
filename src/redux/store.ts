import { configureStore } from "@reduxjs/toolkit";
import contadorReducer from "../components/ContadorSlice";
import textReducer from '../components/TextSlice'
export const store = configureStore({
    reducer:{
        contador: contadorReducer,
        text: textReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
