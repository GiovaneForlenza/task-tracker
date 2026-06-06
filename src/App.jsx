import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SizeIndicator from "./components/SizeIndicator";

function App() {
  return (
    <main className="flex h-screen min-w-120 flex-col items-center justify-start bg-green-50 px-4 pt-8 sm:bg-amber-50 md:bg-red-50 lg:bg-blue-50">
      <SizeIndicator />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
