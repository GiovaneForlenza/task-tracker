import { configureStore } from "@reduxjs/toolkit";
import TaskSlicer from "./taskSlicer";
import FiltersSlicer from "./filterSlicer";
import LocalStorageSlicer from "./localStorageSlicer";
<<<<<<< HEAD
import ModalSlicer from "./modalSlicer";
=======
import ModalSlicer from "../pages/Modal";
>>>>>>> c6b6ac56de78458f8a94f9d88e607861428c63c7

const store = configureStore({
  reducer: {
    task: TaskSlicer,
    filter: FiltersSlicer,
    localStorage: LocalStorageSlicer,
    modal: ModalSlicer,
  },
});

export default store;
