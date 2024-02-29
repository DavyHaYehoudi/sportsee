import { Route, Routes } from "react-router-dom";
import Profil from "./page/Profil";
import Navigation from "./layout/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/:userId" element={<Profil />} />
      </Routes>
    </div>
  );
}

export default App;
