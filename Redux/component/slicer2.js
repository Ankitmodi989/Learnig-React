import { createSlice } from "@reduxjs/toolkit";

const reactslicer1= createSlice({
    name: "slice2",
    initialState: {count:0},
     reducers:{
        addItem:(state)=>{state.count++},
        removeItems:(state)=>{state.count--}
       
    }

})

export const {addItem,removeItems} =reactslicer1.actions;

export default reactslicer1.reducer;
