import { Route, Routes } from "react-router";
import "./App.css";

import Sobre from "./pages/Sobre";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import Contato from "./pages/Contato";

function App() {
  return (
    <>
    <Header />
    <div className="container"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      <footer></footer>
    </>
  );
}

export default App;
