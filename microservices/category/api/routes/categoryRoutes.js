const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Route to create a new category
router.post('/create', categoryController.createCategory);

// Route to get all categories
router.get('/all', categoryController.getAllCategories);

// Route to get a single category by ID
router.get('/:id', categoryController.getCategoryById);

// Route to update a category by ID
router.put('/:id', categoryController.updateCategory);

// Route to delete a category by ID
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
