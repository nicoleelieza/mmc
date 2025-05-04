const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Authentication routes
router.post('/register', userController.register);
router.post('/login', userController.login);

// Error handling for invalid auth routes
router.use((req, res) => {
    res.status(404).json({ message: 'Authentication route not found' });
});

module.exports = router; 