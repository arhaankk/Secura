// Button.jsx
import React from "react";

const Button = ({ type = "button", disabled, onClick, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="px-6 py-2 rounded-full border border-white text-white bg-transparent transition-colors duration-300 hover:bg-white hover:text-black inline-flex items-center"
    >
      {children}
    </button>
  );
};

export default Button;
