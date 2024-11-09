// api/routes/challengeRoutes.js

const express = require('express');
const router = express.Router();
const challengeController = require('../controllers/challengeController');

// Route to create a new challenge
router.post('/create', challengeController.createChallenge);

// Route to get all challenges
router.get('/all', challengeController.getAllChallenges);

// Route to get a single challenge by ID
router.get('/find', challengeController.getChallengeById);

// Route to update a challenge by ID
router.put('/update', challengeController.updateChallenge);

// Route to delete a challenge by ID
router.delete('/delete', challengeController.deleteChallenge);

module.exports = router;
