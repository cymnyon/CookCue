// backend/src/routes/user.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// In-memory user storage (replace with PostgreSQL/Sequelize in production)
const users = [];

// Registration endpoint
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password)
    return res.status(400).json({ message: 'Missing required fields' });
  
  const existingUser = users.find(user => user.email === email);
  if (existingUser)
    return res.status(400).json({ message: 'User already exists' });
  
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { id: Date.now(), username, email, password: hashedPassword };
  users.push(newUser);
  res.status(201).json({ message: 'User registered', user: newUser });
});

// Login endpoint
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user)
    return res.status(400).json({ message: 'User not found' });
  
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword)
    return res.status(400).json({ message: 'Invalid credentials' });
  
  // Generate JWT (ensure you use a secure secret in production)
  const token = jwt.sign({ id: user.id, email: user.email }, 'your_jwt_secret', { expiresIn: '1h' });
  res.json({ message: 'Login successful', token });
});

module.exports = router;