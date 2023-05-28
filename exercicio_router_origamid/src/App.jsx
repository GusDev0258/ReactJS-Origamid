import React from "react";

import './css/App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Produtos from "./components/Produtos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contato from "./components/Contato";
import Produto from "./components/Produto";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="produto/:id" element={<Produto />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
