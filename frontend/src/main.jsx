import React from "react";
import { motion } from "framer-motion";
import bg from "./assets/bg.png";

const Main = () => {
  return (
    <motion.div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${bg})` }}
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -30 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    ></motion.div>
  );
};

export default Main;
