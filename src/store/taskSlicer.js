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
<<<<<<< HEAD
    },
    createNewTask: (state, action) => {
      const randomId = Math.random().toString(36).substring(2, 10);
      action.payload.id = randomId;
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
    editTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id ? { ...task, ...action.payload } : task,
      );
=======
>>>>>>> c6b6ac56de78458f8a94f9d88e607861428c63c7
    },
  },
});

<<<<<<< HEAD
export const {
  toggleCompleted,
  getTasksFromLS,
  createNewTask,
  deleteTask,
  editTask,
} = taskSlice.actions;
=======
export const { toggleCompleted, getTasksFromLS } = taskSlice.actions;
>>>>>>> c6b6ac56de78458f8a94f9d88e607861428c63c7

export default taskSlice.reducer;
