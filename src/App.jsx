import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SizeIndicator from "./components/SizeIndicator";
<<<<<<< HEAD
import { useState } from "react";
import { useSelector } from "react-redux";
=======
>>>>>>> c6b6ac56de78458f8a94f9d88e607861428c63c7

function App() {
  const isModalOpen = useSelector((selector) => selector.modal.isOpen);
  return (
<<<<<<< HEAD
    <main
      className={`flex ${isModalOpen ? "h-screen overflow-hidden" : "min-h-screen"} min-w-100 flex-col items-center justify-start bg-blue-50 p-5 px-2 md:px-5`}
    >
=======
    <main className="flex h-screen min-w-120 flex-col items-center justify-start bg-green-50 px-4 pt-8 sm:bg-amber-50 md:bg-red-50 lg:bg-blue-50">
>>>>>>> c6b6ac56de78458f8a94f9d88e607861428c63c7
      <SizeIndicator />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
