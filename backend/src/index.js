// backend/src/index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Import routes
const userRoutes = require('./routes/user');
const ingredientRoutes = require('./routes/ingredients');
const recipeRoutes = require('./routes/recipes');

app.use('/api/users', userRoutes);
app.use('/api/ingredients', ingredientRoutes);
app.use('/api/recipes', recipeRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});