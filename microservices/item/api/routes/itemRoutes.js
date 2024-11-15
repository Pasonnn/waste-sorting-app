const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const { authenticateUser } = require('../middlewares/authMiddleware');

// Route to create a new item
router.post('/create', authenticateUser, itemController.createItem);

// Route to get all items
router.get('/all', authenticateUser, itemController.getAllItems);

// Route to get a single item by ID
router.get('/:id', authenticateUser, itemController.getItemById);

// Route to update an item by ID
router.put('/:id', authenticateUser, itemController.updateItem);

// Route to delete an item by ID
router.delete('/:id', authenticateUser, itemController.deleteItem);

module.exports = router;
