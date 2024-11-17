const express = require('express'); // Import Express to set up routing
const router = express.Router(); // Create a new router instance
const challengeController = require('../controllers/challengeController'); // Import the challenge controller
const { authenticateUser } = require('../middlwares/authMiddlewareGateway');

// Route to create a new challenge
router.post('/create', authenticateUser, challengeController.createChallenge);

// Route to get all challenges
router.get('/all', authenticateUser, challengeController.getAllChallenges);

// Route to get a single challenge by ID
router.get('/:id', authenticateUser, challengeController.getChallengeById);

// Route to update a challenge by ID
router.put('/:id', authenticateUser, challengeController.updateChallenge);

// Route to delete a challenge by ID
router.delete('/:id', authenticateUser, challengeController.deleteChallenge);

module.exports = router;

