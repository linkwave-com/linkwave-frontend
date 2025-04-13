import React from 'react';
import './Footer.css';
import { FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <h4>Contact us</h4>
          <a href="mailto:info@link-wave.com">
            <FaEnvelope /> info@link-wave.com
          </a>
          <a href="https://x.com/_LinkWave" target="_blank" rel="noopener noreferrer">
            <FaTwitter /> @_LinkWave
          </a>
        </div>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} LinkWave. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
