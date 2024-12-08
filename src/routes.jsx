import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home.jsx";

import Recap from "./pages/Recap.jsx";

const routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recap" element={<Recap />} />
      </Routes>
    </BrowserRouter>
  );
};

export default routes;
