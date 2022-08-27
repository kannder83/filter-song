import { Route, Routes } from "react-router-dom";
import { Error404 } from "./pages/Error404";
import { Home } from "./pages/Home";
import { Library } from "./pages/Library";
import { Find } from "./pages/Find";
import { About } from "./pages/About";
import { DetailSong } from "./pages/DetailSong";
import { Navbar } from "./components/Nabvar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="w-full min-h-screen bg-slate-300">
      <div className="w-full h-[6vh]">
        <Navbar />
      </div>
      <div className="w-full h-[88vh] flex flex-col justify-center items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/library/:songId" element={<DetailSong />} />
          <Route path="/find" element={<Find />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
      <div className="w-full h-[6vh]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
