import React from 'react';
import { useNavigate } from 'react-router-dom';


const BrandHome = () => {
    const navigate = useNavigate();
    const navToHome = () => {
        navigate('/');
      };
    
  return (
    <div>
      <h1>Oops! Nothing here yet.</h1>
      {/* Content here */}
      <button onClick={navToHome}>Back to Home</button>
    </div>
  );
};

export default BrandHome;
