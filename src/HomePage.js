// src/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleRoleChange = (event) => {
    const role = event.target.value;
    if (role === 'influencer') {
      navigate('/influencer');
    } else if (role === 'brand_marketer') {
      navigate('/brand-marketer');
    }
  };

  return (
    <div className="home-page">
      <h1>Pinfluencer</h1>
      <div className="role-selection">
        <label className="custom-checkbox">
          <input
            type="checkbox"
            value="influencer"
            onChange={handleRoleChange}
          />
          <span className="checkmark"></span>
          I am an Influencer
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            value="brand_marketer"
            onChange={handleRoleChange}
          />
          <span className="checkmark"></span>
          I am a Brand Marketer
        </label>
      </div>
      <footer>
        <p>
        <Link to="/privacy-policy">Read our Privacy Policy</Link>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
