import { createSlice } from "@reduxjs/toolkit";

const contadorSlice = createSlice({
    name:'contador',
    initialState: 0,
    reducers:{
        incrementar: (state) => state +1,
        reiniciar : () =>0,
    },
});

export const {incrementar, reiniciar} = contadorSlice.actions;
export default contadorSlice.reducer;