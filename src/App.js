import { Route, Routes } from "react-router-dom";
import Profil from "./page/Profil";
import Navigation from "./layout/Navigation";
import NotFound from "./page/NotFound";
import Home from "./page/Home";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil/:userId" element={<Profil />} />
        <Route path="/notFound" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
