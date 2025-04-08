// Spinner.jsx
import React from "react";

const Spinner = () => (
  <svg
    aria-hidden="true"
    role="status"
    className="inline w-6 h-6 text-white animate-spin"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="25"
      cy="25"
      r="20"
      stroke="currentColor"
      strokeWidth="6"         // Increase this number for a thicker line if needed.
      strokeLinecap="round"
      strokeDasharray="31.4 31.4" // This creates a gap in the circle.
    />
  </svg>
);

export default Spinner;
