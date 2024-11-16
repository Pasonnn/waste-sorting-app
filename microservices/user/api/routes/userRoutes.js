// userRoutes.js

const express = require('express');         // Import Express to set up routing
const router = express.Router();            // Create a new router instance
const userController = require('../controllers/userController'); // Import the user controller
const { authenticateUser } = require('../middlewares/authMiddleware');

// Route for user registration - calls the register function in userController
router.post('/register', userController.register);

// Route for user login - calls the login function in userController
router.post('/login', userController.login);

// Route to get user profile - calls the getProfile function in userController
router.get('/profile', authenticateUser, userController.getProfile);

// Export the router to make it available in other parts of the app
module.exports = router;
