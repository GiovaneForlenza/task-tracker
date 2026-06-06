import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: [
    { name: "All", count: 0, selected: true },
    { name: "Completed", count: 0, selected: false },
    { name: "Incomplete", count: 0, selected: false },
  ],
  selectedFilter: "All",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    getFilterCounter: (state, action) => {
      return;
    },
    updateFilterCounter: (state, action) => {
      if (action.payload !== undefined) {
        state.filters[0].count = action.payload.length;
        state.filters[1].count = action.payload.filter(
          (f) => f.completed === true,
        ).length;
        state.filters[2].count = action.payload.filter(
          (f) => f.completed === false,
        ).length;
      }
    },
    updateSelectedFilter: (state, action) => {
      state.selectedFilter = action.payload;
    },
  },
});

export const { getFilterCounter, updateFilterCounter, updateSelectedFilter } =
  filterSlice.actions;

export default filterSlice.reducer;
