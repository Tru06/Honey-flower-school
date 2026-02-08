import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-icon">🌻</span>
          <span className="logo-text">Honey Flower School</span>
        </Link>

        <button 
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/departments" 
            className={`nav-link ${isActive('/departments') ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Departments
          </Link>
          <Link 
            to="/admissions" 
            className={`nav-link ${isActive('/admissions') ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Admissions
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
        </nav>

        <div className="auth-buttons">
          <Link to="/login" className="btn btn-login">Login</Link>
          <Link to="/signup" className="btn btn-signup">Sign Up</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
