import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Produtos from './components/Produtos';

function App() {

  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Produtos />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
