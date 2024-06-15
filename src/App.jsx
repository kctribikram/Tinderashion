import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Homepage from './components/Homepage.jsx';
import MensClothing from './components/MensClothing.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/mens-clothing" element={<MensClothing />} /> {/* Updated path */}
        {/* Add other routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
