// frontend/src/components/RecipeRecommendations.js
import React, { useState } from 'react';

function RecipeRecommendations() {
  const [ingredients, setIngredients] = useState('');
  const [diet, setDiet] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const getRecommendations = async () => {
    // Call the backend endpoint that relays to the recommendation engine
    const res = await fetch('/api/recipes/recommend', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        // Expecting a comma-separated string from the user
        ingredients: ingredients.split(',').map(ing => ing.trim()),
        diet
      })
    });
    const data = await res.json();
    setRecommendations(data.recommendations);
  };

  return (
    <div>
      <h2>Get Recipe Recommendations</h2>
      <div>
        <input 
          type="text" 
          placeholder="Enter ingredients (comma separated)" 
          value={ingredients} 
          onChange={(e) => setIngredients(e.target.value)} 
        />
      </div>
      <div>
        <input 
          type="text" 
          placeholder="Dietary restrictions (optional)" 
          value={diet} 
          onChange={(e) => setDiet(e.target.value)} 
        />
      </div>
      <button onClick={getRecommendations}>Get Recommendations</button>
      <ul>
        {recommendations.map((rec) => (
          <li key={rec.id}>
            <h3>{rec.title}</h3>
            <p>{rec.details}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeRecommendations;