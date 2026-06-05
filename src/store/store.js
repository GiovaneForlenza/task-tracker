import { configureStore } from "@reduxjs/toolkit";
import TaskSlicer from "./taskSlicer";

const store = configureStore({
  reducer: { task: TaskSlicer },
});

export default store;
