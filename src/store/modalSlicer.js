import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: true, type: null };

const modalSlicer = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlicer.actions;

export default modalSlicer.reducer;
