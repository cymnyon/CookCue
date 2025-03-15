// backend/src/routes/recipes.js
const express = require('express');
const router = express.Router();
// If using Node 18+, fetch is available natively. Otherwise, install node-fetch:
// npm install node-fetch@2
const fetch = require('node-fetch');

router.post('/recommend', async (req, res) => {
  try {
    // Forward the request to the recommendation engine (Flask microservice)
    const response = await fetch('http://localhost:5000/recommend', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error calling recommendation engine:', error);
    res.status(500).json({ error: 'Failed to get recommendations' });
  }
});

module.exports = router;