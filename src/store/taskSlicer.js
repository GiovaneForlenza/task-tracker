import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  temp: "temp",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    text: (state, action) => {
      console.log(state);
    },
  },
});

export const { text } = taskSlice.actions;

export default taskSlice.reducer;
