import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Internships from './components/Internships';
import Recruiter from './components/Recruiter';
import Login from './components/Login';

const App = () => {
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

  const handleLogin = (type) => {
    setUserType(type);
    if (type === 'Intern') {
      navigate('/intern');
    } else if (type === 'Recruiter') {
      navigate('/recruiter');
    }
  };

  return (
    <div>
      {/* Navbar could be displayed on other pages, not on the login page */}
      {userType && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/intern" element={<Hero />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/recruiter" element={<Recruiter />} />
      </Routes>
    </div>
  );
};

export default App;
