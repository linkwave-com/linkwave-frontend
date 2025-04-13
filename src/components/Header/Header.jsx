import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/front-logo.svg';

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo" onClick={closeMobileNav}>
          <img src={logo} alt="LinkWave Logo" />
        </Link>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/docs">Docs</Link>
          <Link to="/roadmap">Project roadmap</Link>
        </nav>

        <button className="menu-toggle" onClick={toggleMobileNav}>
          ☰
        </button>

          <nav className={`mobile-nav ${isMobileNavOpen ? 'open' : ''}`}>
            <Link to="/" onClick={closeMobileNav}>Home</Link>
            <Link to="/pricing" onClick={closeMobileNav}>Pricing</Link>
            <Link to="/docs" onClick={closeMobileNav}>Docs</Link>
            <Link to="/roadmap" onClick={closeMobileNav}>Project roadmap</Link>
          </nav>
      </div>
    </header>
  );
};

export default Header;
