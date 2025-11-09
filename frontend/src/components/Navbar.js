import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🪑</span>
          <span className="logo-text">FurniGo</span>
        </Link>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/browse" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
            Browse
          </Link>
          <Link to="/list" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
            List
          </Link>
          <Link to="/my-rentals" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
            My Rentals
          </Link>
          <Link to="/login" className="navbar-link navbar-login" onClick={() => setIsMenuOpen(false)}>
            Login
          </Link>
        </div>

        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
