import { configureStore } from "@reduxjs/toolkit";
import slice1Reducer from "./slicer1"
import slice2Reducer from "./slicer2";

const stores = configureStore({
    reducer:{
      slice1: slice1Reducer,
      slice2: slice2Reducer,
    }
})

export default stores;
