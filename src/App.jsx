import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SizeIndicator from "./components/SizeIndicator";
import { useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const isModalOpen = useSelector((selector) => selector.modal.isOpen);
  return (
    <main
      className={`flex ${isModalOpen ? "h-screen overflow-hidden" : "min-h-screen"} min-w-100 flex-col items-center justify-start bg-blue-50 p-5 px-2 md:px-5`}
    >
      <SizeIndicator />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
