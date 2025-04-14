import React from 'react';
import './Footer.css';
import { FaTwitter, FaEnvelope, FaLink } from 'react-icons/fa';
import ColosseumLogo from '../../assets/logo-partner.svg';

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

        <div className="footer-authors">
          <h4>Authors</h4>
          <a href="https://arena.colosseum.org/profiles/swiat12" target="_blank" rel="noopener noreferrer">
            <FaLink /> Sviatoslav Chaikovskyi
          </a>
          <a href="https://arena.colosseum.org/profiles/Tfront" target="_blank" rel="noopener noreferrer">
            <FaLink /> Taras Taranko
          </a>
        </div>

        <div className="footer-logos">
          <img src={ColosseumLogo} alt="Colosseum Hackathon" />
        </div>
      </div>

      <div className="copyright">
        &copy; {new Date().getFullYear()} LinkWave. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
