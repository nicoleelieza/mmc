// userRoutes: define all API endpoints

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

// Public routes
router.post('/register', userController.register);
router.post('/login', userController.login);

// Protected routes
router.post('/users', auth, userController.addUser);
router.put('/users/:id', auth, userController.updateUser);
router.delete('/users/:id', auth, userController.deleteUser);

module.exports = router;
