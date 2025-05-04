const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Register a new user
router.post('/register', userController.register);

// Login user
router.post('/login', userController.login);

// Add a new user (admin only)
router.post('/users', userController.addUser);

// Update user
router.put('/users/:id', userController.updateUser);

// Delete user
router.delete('/users/:id', userController.deleteUser);

module.exports = router; 