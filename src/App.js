import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './components/Home/Home';
import DocsPage from './components/Docs/Docs';
import PricingPage from './components/Pricing/Pricing';
import ProjectRoadmap from './components/Roadmap/Roadmap';

function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/roadmap" element={<ProjectRoadmap />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
