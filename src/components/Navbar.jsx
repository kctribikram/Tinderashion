import React, { useState } from 'react';
import './Navbar.css';
// import logo from '../logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        
        <span className="brand-name">Tinderashion</span>
      </div>
      <div className={`navbar-center ${isOpen ? 'open' : ''}`}>
        <div className="navbar-links">
          <a href="/">Home</a>
          <a href="/mens-clothing">Men's Clothing</a>
          <a href="/womens-clothing">Women's Clothing</a>
          <a href="/shoes">Shoes</a>
        </div>
      </div>
      <div className="navbar-icons">
        <a href="/search" className="icon search-icon">🔍</a>
        <a href="/profile" className="icon profile-icon">👤</a>
        <a href="/cart" className="icon cart-icon">🛒</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
