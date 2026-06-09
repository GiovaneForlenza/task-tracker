import React from "react";

function ModalActionButton({ type, text, handleClick, taskTitle }) {
  return (
    <button
      className={`w-full rounded-lg ${
        (type === "Create" || type === "Save") && taskTitle
          ? "cursor-pointer border border-blue-50 bg-blue-50 text-blue-500 hover:border-blue-100 hover:bg-blue-100"
          : (type === "Create" || type === "Save") && !taskTitle
            ? "cursor-not-allowed border border-gray-300 bg-white text-gray-300"
            : type === "Delete"
              ? "cursor-pointer bg-red-50 text-red-500 hover:bg-red-100"
              : "cursor-pointer border border-gray-400 bg-gray-50 text-gray-500 hover:bg-gray-100"
      } px-3 py-2 font-semibold transition-all`}
      onClick={() => handleClick(type)}
      disabled={!taskTitle}
    >
      {text}
    </button>
  );
}

export default ModalActionButton;
