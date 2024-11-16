// api/controllers/challengeController.js

const Challenge = require('../models/challengeModel');

// Create a new challenge
exports.createChallenge = async (req, res) => {
    try {
        const { title, description, points, status } = req.body;
        const challenge = new Challenge({ title, description, points, status });
        const savedChallenge = await challenge.save();
        res.status(201).json(savedChallenge);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create challenge', details: error.message });
    }
};


// Get all challenges
exports.getAllChallenges = async (req, res) => {
    try {
        const challenges = await Challenge.find();
        res.status(200).json(challenges);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving challenges', details: error.message });
    }
};

// Get a single challenge by ID
exports.getChallengeById = async (req, res) => {
    try {
        const challenge = await Challenge.findById(req.params.id);
        if (!challenge) {
            return res.status(404).json({ error: 'Challenge not found' });
        }
        res.status(200).json(challenge);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving challenge', details: error.message });
    }
};

// Update a challenge by ID
exports.updateChallenge = async (req, res) => {
    try {
        const updatedChallenge = await Challenge.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedChallenge) {
            return res.status(404).json({ error: 'Challenge not found' });
        }
        res.status(200).json(updatedChallenge);
    } catch (error) {
        res.status(400).json({ error: 'Error updating challenge', details: error.message });
    }
};

// Delete a challenge by ID
exports.deleteChallenge = async (req, res) => {
    try {
        const deletedChallenge = await Challenge.findByIdAndDelete(req.params.id);
        if (!deletedChallenge) {
            return res.status(404).json({ error: 'Challenge not found' });
        }
        res.status(200).json({ message: 'Challenge deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting challenge', details: error.message });
    }
};
