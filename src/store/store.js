import { configureStore } from "@reduxjs/toolkit";
import TaskSlicer from "./taskSlicer";
import FiltersSlicer from "./filterSlicer";
import LocalStorageSlicer from "./localStorageSlicer";
import ModalSlicer from "../pages/Modal";

const store = configureStore({
  reducer: {
    task: TaskSlicer,
    filter: FiltersSlicer,
    localStorage: LocalStorageSlicer,
    modal: ModalSlicer,
  },
});

export default store;
