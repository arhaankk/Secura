import React from "react";
import { useNavigate } from "react-router-dom";

const StartButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/main");
  }
  return (
    <button
      onClick={handleClick}
      className="px-6 py-2 rounded-full border border-white text-white bg-transparent transition-colors duration-300 hover:bg-white hover:text-black">
      Start
    </button>
  );
};

export default StartButton;
