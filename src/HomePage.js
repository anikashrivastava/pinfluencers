// src/HomePage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const [isStarted, setIsStarted] = useState(false);
  const [isButtonHidden, setIsButtonHidden] = useState(false);

  const handleGetStartedClick = () => {
    setIsStarted(true);
    setIsButtonHidden(true);
  };
  useEffect(() => {
    // Reset the state to its default value when the component mounts
    setIsStarted(false);
    setIsButtonHidden(false);
  }, []);

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
      <div className={`home-page ${isStarted ? 'started' : ''}`}>
        <h1 className={`title ${isStarted ? 'shrink' : ''}`}>Pinfluencer.</h1>
        {!isStarted && (
          <p className="description">Using AI powered insights to connect the right brands and influencers.</p>
        )}
        {!isButtonHidden && 
            <div className='button-containter'>
                <button className="get-started button-34" onClick={handleGetStartedClick}>
                Get Started
            </button>
        </div>
        }
        {isStarted && (
          <div className="role-selection-container">
            <h3>I am a...</h3>
            <div className='role-selection'>
            <div class="checkbox-wrapper-24">
            <input type="checkbox" value = "influencer" id="check-24" name="check" onChange={handleRoleChange} />
            <label for="check-24">
                <span></span>Influencer/Content Creator
            </label>
            </div>
            <div class="checkbox-wrapper-24">
            <input type="checkbox" value = "brand_marketer" id="check-24" name="check" onChange={handleRoleChange} />
            <label for="check-24">
                <span></span>Brand Marketer
            </label>
            </div>
            </div>
          </div>
        )}
        <footer>
          <p>
            <Link to="/privacy-policy">Read our Privacy Policy</Link>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
