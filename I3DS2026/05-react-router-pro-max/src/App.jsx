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
        <Route path="*" element={<h1>Página Não Encontrada</h1>} />
      </Routes>

      <footer></footer>
    </>
  );
}

export default App;
