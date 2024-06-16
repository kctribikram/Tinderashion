import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Main Pages</h2>
          <a href="/">Home</a>
          <a href="/collections">Collections</a>
          <a href="/cart">Cart</a>
        </div>
        <div className="footer-section">
          <h2>Utility Pages</h2>
          <a href="/contact">Contact</a>
          <Link to="/login">Login</Link>
          <a href="/signup">Signup</a>
        </div>
        <div className="footer-section">
          <h2>Newsletter</h2>
          <p>Get the latest news about us and sign up and get 20% off today. Never miss a single promo.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email" />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Tinderashion. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
