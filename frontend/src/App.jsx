import { Route, Routes } from "react-router-dom";
import { Error404 } from "./pages/Error404";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
