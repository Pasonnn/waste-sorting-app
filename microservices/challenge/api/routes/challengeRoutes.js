// api/routes/challengeRoutes.js

const express = require('express');
const router = express.Router();
const challengeController = require('../controllers/challengeController');
const { authenticateUser } = require('../middlewares/authMiddleware');

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
