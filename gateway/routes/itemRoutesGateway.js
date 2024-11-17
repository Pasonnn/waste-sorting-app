const express = require('express'); // Import Express to set up routing
const router = express.Router(); // Create a new router instance
const itemController = require('../controllers/itemController'); // Import the item controller
const { authenticateUser } = require('../middlwares/authMiddlewareGateway');

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