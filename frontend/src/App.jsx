import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Error404 } from "./pages/Error404";
import { Home } from "./pages/Home";
import { Library } from "./pages/Library";
import { Find } from "./pages/Find";
import { About } from "./pages/About";
import { DetailSong } from "./pages/DetailSong";




function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} >
        <Route index element={<Home />} />
        <Route path="library" element={<Library />} />
        <Route path="library/:songId" element={<DetailSong />} />
        <Route path="find" element={<Find />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
