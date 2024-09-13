import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import InfluencerHome from './InfluencerHome';
import BrandHome from './BrandHome';
import PrivacyPolicy from './PrivacyPolicy';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/influencer" element={<InfluencerHome />} />
        <Route path="/brand-marketer" element={<BrandHome />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
