// frontend/src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Signup from './components/Signup';
import FridgeManager from './components/FridgeManager';
import RecipeRecommendations from './components/RecipeRecommendations';

function App() {
  const [token, setToken] = useState(null);

  const handleLogin = (jwt) => {
    setToken(jwt);
  };

  return (
    <Router>
      <div>
        <header>
          <h1>CookCue</h1>
          <nav>
            <Link to="/">Home</Link> |{' '}
            <Link to="/login">Login</Link> |{' '}
            <Link to="/signup">Sign Up</Link> |{' '}
            <Link to="/fridge">My Fridge</Link> |{' '}
            <Link to="/recommendations">Recipes</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/fridge" element={<FridgeManager />} />
            <Route path="/recommendations" element={<RecipeRecommendations />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;