<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../store/modalSlicer";
import ModalActionButton from "../components/ModalActionButton";
import { Check } from "lucide-react";
import { createNewTask, deleteTask, editTask } from "../store/taskSlicer";

function Modal() {
  const dispatch = useDispatch();
  const modalType = useSelector((selector) => selector.modal.type);
  const task = useSelector((selector) => selector.modal.task);
  function handleOnClick() {
    dispatch(closeModal());
  }

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    tag: "Grocieries",
    description: "",
    completed: false,
  });

  useEffect(() => {
    if (modalType === "Edit" || modalType === "Delete") {
      setFormData({
        id: task.id || "",
        title: task.title || "",
        tag: task.tag || "groceries",
        description: task.description || "",
        completed: task.completed || false,
      });
    } else {
      resetForm();
    }
  }, [modalType]);
  function resetForm() {
    setFormData({
      id: "",
      title: "",
      description: "",
      tag: "",
      completed: false,
    });
  }
  function handleActionButtonClick(action) {
    switch (action) {
      case "Create":
        dispatch(createNewTask(formData));
        break;
      case "Delete":
        dispatch(deleteTask(task.id));
        break;
      case "Save":
        dispatch(editTask(formData));
        break;
    }
    dispatch(closeModal());
    resetForm();
  }

  return (
    <div className="absolute top-0 left-0 flex h-screen w-full min-w-100 items-center justify-center py-5">
      <div
        className="h-screen w-full items-center justify-center bg-gray-900/50"
        onClick={handleOnClick}
      ></div>
      <div className="absolute mx-10 flex w-full max-w-100 flex-col gap-6 rounded-xl bg-white p-4">
        {modalType === "Delete" ? (
          <div className="flex flex-col items-center justify-center">
            <h2>Are you sure you want to delete "{task.title}"?</h2>
            <p className="text-sm font-semibold text-red-500">
              This action can't be undone
            </p>
          </div>
        ) : (
          <form action="" className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="">Title</label>
              <input
                type="text"
                value={formData.title}
                autoFocus
                required
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="rounded-sm border border-gray-400 px-2 py-1"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Description</label>
              <textarea
                type="text"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="rounded-sm border border-gray-400 px-2 py-1"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Tag</label>
              <select
                onChange={(e) =>
                  setFormData({ ...formData, tag: e.target.value })
                }
                value={formData.tag}
                className="rounded-sm border border-gray-400 px-2 py-1"
              >
                <option value="School">School</option>
                <option value="Work">Work</option>
                <option value="Chores">Chores</option>
                <option value="Groceries">Groceries</option>
              </select>
            </div>
            <div
              className="flex flex-row gap-2"
              onClick={() =>
                setFormData({ ...formData, completed: !formData.completed })
              }
            >
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full border hover:cursor-pointer ${formData.completed ? "border-none bg-blue-500" : "border-gray-500"}`}
              >
                {formData.completed && (
                  <Check size={16} className="bold font-bold text-white" />
                )}
              </div>
              <label htmlFor="">Completed</label>
            </div>
          </form>
        )}

        {/* Action buttons */}
        <div className="flex flex-row gap-4">
          {modalType === "Create" && (
            <ModalActionButton
              handleClick={handleActionButtonClick}
              text={"Create Task"}
              type={"Create"}
            />
          )}
          {modalType === "Edit" && (
            <ModalActionButton
              handleClick={handleActionButtonClick}
              text={"Save Task"}
              type={"Save"}
            />
          )}
          {modalType === "Delete" && (
            <ModalActionButton
              handleClick={handleActionButtonClick}
              text={"Delete Task"}
              type={"Delete"}
            />
          )}

          <ModalActionButton
            handleClick={handleActionButtonClick}
            text={"Cancel"}
            type={"Cancel"}
          />
        </div>
      </div>
=======
import React from "react";

function Modal() {
  return (
    <div className="absolute top-0 left-0 z-10 flex h-screen w-full items-center justify-center bg-gray-900/50">
      Modal
>>>>>>> c6b6ac56de78458f8a94f9d88e607861428c63c7
    </div>
  );
}

export default Modal;
