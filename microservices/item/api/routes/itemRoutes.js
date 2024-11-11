const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Route to create a new item
router.post('/create', itemController.createItem);

// Route to get all items
router.get('/all', itemController.getAllItems);

// Route to get a single item by ID
router.get('/:id', itemController.getItemById);

// Route to update an item by ID
router.put('/:id', itemController.updateItem);

// Route to delete an item by ID
router.delete('/:id', itemController.deleteItem);

module.exports = router;
