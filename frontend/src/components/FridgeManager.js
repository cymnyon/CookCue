// frontend/src/components/FridgeManager.js
import React, { useState, useEffect } from 'react';

function FridgeManager() {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');

  const fetchIngredients = async () => {
    const res = await fetch('/api/ingredients');
    const data = await res.json();
    setIngredients(data.ingredients);
  };

  useEffect(() => {
    fetchIngredients();
  }, []);

  const addIngredient = async () => {
    const res = await fetch('/api/ingredients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, quantity, unit }),
    });
    const data = await res.json();
    setIngredients([...ingredients, data.ingredient]);
    setName('');
    setQuantity('');
    setUnit('');
  };

  return (
    <div>
      <h2>My Fridge</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.id}>
            {ingredient.name} - {ingredient.quantity} {ingredient.unit}
          </li>
        ))}
      </ul>
      <h3>Add Ingredient</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <input
        type="text"
        placeholder="Unit"
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
      />
      <button onClick={addIngredient}>Add</button>
    </div>
  );
}

export default FridgeManager;