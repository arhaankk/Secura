import React from "react";

const StartButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 rounded-full border border-white text-white bg-transparent transition-colors duration-300 hover:bg-white hover:text-black"
    >
      Start
    </button>
  );
};

export default StartButton;
