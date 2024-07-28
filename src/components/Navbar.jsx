import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      
        <span className="brand-name">Tinderashion</span>
   
      <div className={`navbar-center ${isOpen ? 'open' : ''}`}>
        <div className="navbar-links">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/mens-clothing" onClick={closeMenu}>Men's Clothing</Link>
          <Link to="/womens-clothing" onClick={closeMenu}>Women's Clothing</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
          <Link to="/shoes" onClick={closeMenu}>Shoes</Link>
          <Link to="/faq" onClick={closeMenu}>Faqs</Link>
        </div>
      </div>
      <div className="navbar-icons">
        <Link to="/search" className="icon search-icon" onClick={closeMenu}>🔍</Link>
        <Link to="/profile" className="icon profile-icon" onClick={closeMenu}>👤</Link>
        <Link to="/cart" className="icon cart-icon" onClick={closeMenu}>🛒</Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
