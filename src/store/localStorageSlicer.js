import { createSlice } from "@reduxjs/toolkit";

const localStorageSlicer = createSlice({
  name: "localStorage",
  initialState: [],
  reducers: {
    updateLS: (state, action) => {
      localStorage.setItem("tasks", JSON.stringify(action.payload));
    },
  },
});

export const { updateLS } = localStorageSlicer.actions;

export default localStorageSlicer.reducer;
