import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home.jsx";
import Recap from "./pages/Recap.jsx";
import Mestre from "./pages/Mestre.jsx";
import CharacterCreation from "./pages/CharacterCreation.jsx";

const routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recap" element={<Recap />} />
        <Route path="/mestre" element={<Mestre />} />
        <Route path="/criapersonagem" element={<CharacterCreation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default routes;
