import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Internships from './components/Internships';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/internships" element={<Internships />} />
      </Routes>
    </div>
  );
};

export default App;
