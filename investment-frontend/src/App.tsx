import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login';
import Register from './pages/Register';
import IdeaPage from './pages/IdeaPage';
import Contact from './pages/contact';
import About from './pages/about';
import Ideas from './pages/Ideas';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect the root path to the home page */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ideas/submit" element={<IdeaPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/ideas" element={<Ideas />} />
      
   

    
      </Routes>
    </Router>
  );
};

export default App;