import { Check, Pencil, Trash } from "lucide-react";
import React from "react";
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import { toggleCompleted } from "../store/taskSlicer";
import { openModal, closeModal } from "../store/modalSlicer";

function TaskItem({ task }) {
  const dispatch = useDispatch();

  const modalType = useSelector((selector) => selector.modal.type);

  function handleClick(type) {
    dispatch(openModal({ type: type, task: task }));
  }
  return (
    <div className="flex flex-row items-start justify-between py-4">
      <div
        className={`flex w-full flex-row items-start justify-start gap-2 ${task.completed ? " line-through" : ""}`}
      >
        <div
          className={`flex items-center justify-center rounded-full border px-1 py-1 hover:cursor-pointer ${task.completed ? "border-blue-500 bg-blue-500" : "border-gray-500"}`}
          onClick={() => dispatch(toggleCompleted(task.id))}
        >
          <Check size={12} className="bold font-bold text-white" />
          {/* {task.completed && (
          )} */}
        </div>
        <div className="flex w-full flex-col pr-2">
          <h2 className="text-md">{task.title}</h2>
          <p className="text-sm text-gray-700">{task.description}</p>
        </div>
      </div>
      {task.tag && (
        <div className="w-1/3 md:w-full">
          <div
            className={`w-fit rounded-sm border px-1 py-0.5 text-xs ${task.tag === "School" ? "border-blue-200 bg-blue-50 text-blue-900" : task.tag === "Work" ? "border-orange-200 bg-orange-50 text-orange-900" : task.tag === "Groceries" ? "border-green-200 bg-green-50 text-green-900" : "border-purple-200 bg-purple-50 text-purple-900"}`}
          >
            {task.tag}
          </div>
        </div>
      )}

      <div className="flex flex-row gap-2 text-sm sm:gap-4">
        <Trash
          size={18}
          className="text-red-500 hover:cursor-pointer"
          onClick={() => handleClick("Delete")}
        />
        <Pencil
          size={18}
          className="hover:cursor-pointer"
          onClick={() => handleClick("Edit")}
        />
=======
import { useDispatch } from "react-redux";
import { toggleCompleted } from "../store/taskSlicer";

function TaskItem({ task }) {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row items-start justify-between py-4">
      <div
        className={`flex flex-row items-center justify-center gap-4 ${task.completed ? "text-blue-400 line-through" : ""}`}
      >
        <div
          className={`flex h-6 w-6 items-center justify-center rounded-full border hover:cursor-pointer ${task.completed ? "bg-blue-500" : "border-gray-500"}`}
          onClick={() => dispatch(toggleCompleted(task.id))}
        >
          {task.completed && (
            <Check size={16} className="bold font-bold text-white" />
          )}
        </div>
        {task.title}
      </div>

      {/* TODO implement edit and delete functions */}
      <div className="flex flex-row gap-4 text-sm">
        <Trash size={18} className="text-red-500 hover:cursor-pointer" />
        <Pencil size={18} className="hover:cursor-pointer" />
>>>>>>> c6b6ac56de78458f8a94f9d88e607861428c63c7
      </div>
    </div>
  );
}

export default TaskItem;
