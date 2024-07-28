import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Homepage from './components/Homepage.jsx';
import MensClothing from './components/MensClothing.jsx';
import WomensClothing from './components/WomensClothing.jsx';
import Shoes from './components/Shoes.jsx';
import Cart from './components/Cart.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Contact from './components/Contact.jsx';
import Faq from './components/Faq.jsx';

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/mens-clothing" element={<MensClothing cart={cart} setCart={setCart} />} /> 
        <Route path="/womens-clothing" element={<WomensClothing cart={cart} setCart={setCart} />} /> 
        <Route path="/shoes" element={<Shoes cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/faq' element={<Faq/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
