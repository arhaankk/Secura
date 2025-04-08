import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./home";
import Main from "./main";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedRoutes;
