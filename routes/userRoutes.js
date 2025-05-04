// userRoutes: define all API endpoints

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

// Public routes (no authentication required)
router.post('/register', userController.register);
router.post('/login', userController.login);

// Protected user routes (require authentication)
router.post('/', auth, userController.addUser);
router.put('/:id', auth, userController.updateUser);
router.delete('/:id', auth, userController.deleteUser);

// Error handling for invalid user routes
router.use((req, res) => {
    res.status(404).json({ message: 'User route not found' });
});

module.exports = router;
