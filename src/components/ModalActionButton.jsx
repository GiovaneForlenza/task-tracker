import React from "react";

function ModalActionButton({ type, text, handleClick }) {
  return (
    <button
      className={`w-full rounded-lg ${type === "Create" ? "bg-blue-50 text-blue-500 hover:bg-blue-100" : type === "Save" ? "bg-blue-50 text-blue-500 hover:bg-blue-100" : type === "Delete" ? "bg-red-50 text-red-500 hover:bg-red-100" : "bg-gray-50 text-gray-500 hover:bg-gray-100"} px-3 py-2 font-semibold transition-all hover:cursor-pointer`}
      onClick={() => handleClick(type)}
    >
      {text}
    </button>
  );
}

export default ModalActionButton;
