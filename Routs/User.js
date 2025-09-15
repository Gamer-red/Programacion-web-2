// routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../Models/Model_user');

// POST /api/users/register
router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.json({ message: 'Usuario registrado', user: savedUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// POST /api/users/login
router.post('/login', (req, res) => {
  res.json({ message: 'Iniciar sesión' });
});
// GET /api/users/:id
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: 'Usuario no encontrado' });
  }
});
// PUT /api/users/:id
router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Devuelve el documento actualizado
    );
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
module.exports = router;