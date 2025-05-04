// userRoutes: define all API endpoints

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

// Public routes (no authentication required)
router.post('/register', userController.register);
router.post('/login', userController.login);

// Protected routes (require authentication)
router.post('/users', auth, userController.addUser);
router.put('/users/:id', auth, userController.updateUser);
router.delete('/users/:id', auth, userController.deleteUser);

// Error handling for invalid routes
router.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

module.exports = router;
