const express = require('express'); // Import Express to set up routing
const router = express.Router(); // Create a new router instance
const categoryController = require('../controllers/categoryController'); // Import the category controller
const { authenticateUser } = require('../middlwares/authMiddlewareGateway');

// Route to create a new category
router.post('/create', authenticateUser, categoryController.createCategory);

// Route to get all categories
router.get('/all', authenticateUser, categoryController.getAllCategories);

// Route to get a single category by ID
router.get('/:id', authenticateUser, categoryController.getCategoryById);

// Route to update a category by ID
router.put('/:id', authenticateUser, categoryController.updateCategory);

// Route to delete a category by ID
router.delete('/:id', authenticateUser, categoryController.deleteCategory);

module.exports = router;
