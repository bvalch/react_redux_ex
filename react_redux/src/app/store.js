import { configureStore } from "@reduxjs/toolkit";
//importing the reducer from counterSlice
import counterReducer from "../features/counter/counterSlice"



export const store = configureStore({
    //reducer goes here
  reducer: {
    counter: counterReducer,
  },
});
