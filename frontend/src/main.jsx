import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bg from "./assets/bg.png";
import OutputCard from "./components/OutputCard";
import InputForm from "./components/InputForm";

const Main = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8000/secura/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: input }),
      });
      const data = await response.json();
      setOutput(data);
    } catch (error) {
      setOutput("Error: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat text-white p-8"
      style={{ backgroundImage: `url(${bg})` }}
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -30 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Top Right Home Link */}
      <Link
        to="/"
        aria-label="Secura"
        className="absolute top-16 left-24 block w-40 h-12 z-50"
      />

      <div className="flex flex-col items-center justify-center ">
        {/* Input Area */}
        <div className="w-full max-w-lg mt-24">
          <InputForm
            input={input}
            setInput={setInput}
            onSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </div>

        {/* Output Area (placed lower with extra margin-top) */}
        <div className="w-full max-w-6xl mt-16">
          <OutputCard output={output} />
        </div>
      </div>
    </motion.div>
  );
};

export default Main;
