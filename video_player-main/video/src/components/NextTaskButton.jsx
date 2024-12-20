import React from "react";

const NextTaskButton = ({ onClick, disabled }) => (
  <button
    className={`mt-4 bg-black-600 text-white px-4 py-2 rounded-md ${
      disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
    }`}
    onClick={onClick}
    disabled={disabled}
  >
    Next Task
  </button>
);

export default NextTaskButton;
