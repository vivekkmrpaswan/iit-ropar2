import React from "react";

const ThemeToggle = () => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      className="fixed top-4 right-4 p-2 bg-gray-800 text-white rounded"
      onClick={toggleTheme}
      aria-label="Toggle dark/light theme"
    >
      Theme
    </button>
  );
};

export default ThemeToggle;
