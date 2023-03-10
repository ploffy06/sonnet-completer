import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import ChangeLog from './pages/ChangeLog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/changelog" element={<ChangeLog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
