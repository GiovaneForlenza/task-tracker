import { createSlice } from "@reduxjs/toolkit";
import { updateLS } from "./localStorageSlicer";
import { useDispatch } from "react-redux";
const initialState = {
  tasks:
    JSON.parse(localStorage.getItem("tasks")) ||
    [
      // { id: 1, title: "tesasdasdt", description: "asasd", completed: true },
      // { id: 2, title: "12313sad", description: "asdad", completed: false },
      // { id: 3, title: "akwdiojasd", description: "lk3m13", completed: false },
      // { id: 3, title: "a", description: "", completed: false },
    ],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    toggleCompleted: (state, action) => {
      const id = action.payload;
      const task = state.tasks.find((t) => t.id === id);

      if (task) {
        task.completed = !task.completed;
      }
    },
    getTasksFromLS: (state, action) => {
      state.tasks = localStorage.getItem("tasks");
    },
  },
});

export const { toggleCompleted, getTasksFromLS } = taskSlice.actions;

export default taskSlice.reducer;
