// frontend/src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Welcome to CookCue</h1>
      <p>Please sign up or log in to continue.</p>
      <div style={{ marginTop: '1.5rem' }}>
        <Link to="/signup">
          <button style={{ marginRight: '1rem' }}>Sign Up</button>
        </Link>
        <Link to="/login">
          <button>Log In</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;