import { Check, Pencil, Trash } from "lucide-react";
import React from "react";
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
      </div>
    </div>
  );
}

export default TaskItem;
