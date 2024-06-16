import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Homepage from './components/Homepage.jsx';
import MensClothing from './components/MensClothing.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/mens-clothing" element={<MensClothing />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
