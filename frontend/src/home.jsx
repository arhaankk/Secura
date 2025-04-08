// Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import TitleMessage from "./components/title.jsx";
import Button from "./components/Button.jsx";
import bg from "./assets/bg.png";

function Home() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/main");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col items-center justify-center h-screen gap-20">
        <TitleMessage />
        <Button onClick={handleStart}>Start</Button>
      </div>
    </div>
  );
}

export default Home;
