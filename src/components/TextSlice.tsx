import { createSlice } from "@reduxjs/toolkit";

const TextSlice = createSlice({
   name:'text',
   initialState:{value: 'Hacer click aquí'},
   reducers:{
    toggleText:(state)=>{
        state.value = state.value === 'Hacer click aquí' ? '¡Gracias por hacer click!': 'Hacer click aquí';   
    },
   },
});

export const {toggleText} = TextSlice.actions;
export default TextSlice.reducer;