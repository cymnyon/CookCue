// backend/src/routes/ingredients.js
const express = require('express');
const router = express.Router();

// In-memory storage for ingredients
let ingredients = [];

// Create a new ingredient
router.post('/', (req, res) => {
  const { name, quantity, unit } = req.body;
  if (!name || !quantity || !unit)
    return res.status(400).json({ message: 'Missing required fields' });
  
  const newIngredient = { id: Date.now(), name, quantity, unit };
  ingredients.push(newIngredient);
  res.status(201).json({ message: 'Ingredient added', ingredient: newIngredient });
});

// Get all ingredients
router.get('/', (req, res) => {
  res.json({ ingredients });
});

// Update an ingredient
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, quantity, unit } = req.body;
  const ingredient = ingredients.find(ing => ing.id == id);
  if (!ingredient)
    return res.status(404).json({ message: 'Ingredient not found' });
  
  if (name) ingredient.name = name;
  if (quantity) ingredient.quantity = quantity;
  if (unit) ingredient.unit = unit;
  res.json({ message: 'Ingredient updated', ingredient });
});

// Delete an ingredient
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  ingredients = ingredients.filter(ing => ing.id != id);
  res.json({ message: 'Ingredient deleted' });
});

module.exports = router;