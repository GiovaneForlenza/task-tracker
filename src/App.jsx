import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const isModalOpen = useSelector((selector) => selector.modal.isOpen);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-start bg-blue-50 p-5 px-2 md:min-w-100 md:px-5`}
    >
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
