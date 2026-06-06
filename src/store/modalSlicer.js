import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false, type: null, task: null };

const modalSlicer = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.type = action.payload.type;
      if (action.payload.task) {
        state.task = action.payload.task;
      }
    },
    closeModal: (state, action) => {
      state.isOpen = false;
      state.type = null;
      state.task = null;
    },
  },
});

export const { openModal, closeModal } = modalSlicer.actions;

export default modalSlicer.reducer;
