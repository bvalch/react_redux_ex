import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

//desctuctoring the finctions to increment and decrement, comes from actions property of the Slice
//need to export the reducer as well for some reason
export const { increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;