const axios = require('axios');
const env = require('dotenv');
env.config();

// Base URL for the challenge service
const challengeServiceUrl = process.env.CHALLENGE_SERVICE_URL;

/**
 * Create a new challenge
 */
const createChallenge = async (req, res) => {
    try {
        const response = await axios.post(`${challengeServiceUrl}/create`, req.body);
        res.status(response.status).json(response.data);
    } catch (error) {
        handleAxiosError(error, res);
    }
};

/**
 * Get all challenges
 */
const getAllChallenges = async (req, res) => {
    try {
        const response = await axios.get(`${challengeServiceUrl}/all`);
        res.status(response.status).json(response.data);
    } catch (error) {
        handleAxiosError(error, res);
    }
};

/**
 * Get a single challenge by ID
 */
const getChallengeById = async (req, res) => {
    try {
        const response = await axios.get(`${challengeServiceUrl}/${req.params.id}`);
        res.status(response.status).json(response.data);
    } catch (error) {
        handleAxiosError(error, res);
    }
};

/**
 * Update a challenge by ID
 */
const updateChallenge = async (req, res) => {
    try {
        const response = await axios.put(`${challengeServiceUrl}/${req.params.id}`, req.body);
        res.status(response.status).json(response.data);
    } catch (error) {
        handleAxiosError(error, res);
    }
};

/**
 * Delete a challenge by ID
 */
const deleteChallenge = async (req, res) => {
    try {
        const response = await axios.delete(`${challengeServiceUrl}/${req.params.id}`);
        res.status(response.status).json(response.data);
    } catch (error) {
        handleAxiosError(error, res);
    }
};

/**
 * Handle Axios Errors
 */
const handleAxiosError = (error, res) => {
    if (error.response) {
        res.status(error.response.status).json(error.response.data);
    } else {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createChallenge,
    getAllChallenges,
    getChallengeById,
    updateChallenge,
    deleteChallenge,
};
