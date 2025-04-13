import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import logo from '../../../assets/logo-gradient.svg';

const Hero = () => {
  const waveRef = useRef(null);
  const navigate = useNavigate();

  const triggerWave = () => {
    const el = waveRef.current;
    if (!el) return;

    el.classList.add('animate');
    setTimeout(() => el.classList.remove('animate'), 2000);
  };

  const goToRoadmap = () => {
    navigate('/roadmap');
  };

  return (
    <header className="hero">
      <div className="hero-inner">
        <div className="logo-container">
          <img src={logo} alt="LinkWave Logo" className="logo" />
        </div>
        <h1>Subscribe smarter, pay with crypto</h1>
        <p>Easily integrate recurring USDC payments with just a few lines of code.</p>

        <div className="hero-buttons">
          <button className="cta secondary" onClick={goToRoadmap}>See roadmap</button>
        </div>
      </div>

      <div className="wave-bottom" onClick={triggerWave} ref={waveRef}>
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path fill="#0f111a" d="M0,30 C360,80 1080,0 1440,50 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </header>
  );
};

export default Hero;
