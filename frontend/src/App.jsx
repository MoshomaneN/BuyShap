import React from 'react';
import { Routes, Route } from 'react-router-dom';  // <-- import these properly
import Home from './pages/Home';
import Compare from './pages/Compare';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/compare" element={<Compare />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;



