import { createSlice } from "@reduxjs/toolkit";

<<<<<<< HEAD
const initialState = { isOpen: false, type: null, task: null };
=======
const initialState = { isOpen: true, type: null };
>>>>>>> c6b6ac56de78458f8a94f9d88e607861428c63c7

const modalSlicer = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
<<<<<<< HEAD
      state.type = action.payload.type;
      if (action.payload.task) {
        state.task = action.payload.task;
      }
    },
    closeModal: (state, action) => {
      state.isOpen = false;
      state.type = null;
      state.task = null;
=======
    },
    closeModal: (state, action) => {
      state.isOpen = false;
>>>>>>> c6b6ac56de78458f8a94f9d88e607861428c63c7
    },
  },
});

export const { openModal, closeModal } = modalSlicer.actions;

export default modalSlicer.reducer;
