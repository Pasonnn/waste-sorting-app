const axios = require('axios');
const env = require('dotenv');
env.config();

// Base URL for the user service
const userServiceUrl = process.env.USER_SERVICE_URL;

/**
 * Register a new user
 */
const register = async (req, res) => {
    try {
        const response = await axios.post(`${userServiceUrl}/register`, req.body);
        res.status(response.status).json(response.data);
    } catch (err) {
        handleAxiosError(err, res);
    }
};

/**
 * Login user
 */
const login = async (req, res) => {
    try {
        const response = await axios.post(`${userServiceUrl}/login`, req.body);
        res.status(response.status).json(response.data);
    } catch (err) {
        handleAxiosError(err, res);
    }
};

/**
 * Get user profile
 */
const getProfile = async (req, res) => {
    try {
        const response = await axios.get(`${userServiceUrl}/profile`, {
            headers: {
                Authorization: req.header('Authorization'),
            },
        });
        res.status(response.status).json(response.data);
    } catch (err) {
        handleAxiosError(err, res);
    }
};

/**
 * Update user profile
 */
const updateProfile = async (req, res) => {
    try {
        const response = await axios.put(`${userServiceUrl}/profile`, req.body, {
            headers: {
                Authorization: req.header('Authorization'),
            },
        });
        res.status(response.status).json(response.data);
    } catch (err) {
        handleAxiosError(err, res);
    }
};

/**
 * Delete user account
 */
const deleteUser = async (req, res) => {
    try {
        const response = await axios.delete(`${userServiceUrl}/delete`, {
            headers: {
                Authorization: req.header('Authorization'),
            },
        });
        res.status(response.status).json(response.data);
    } catch (err) {
        handleAxiosError(err, res);
    }
};

/**
 * Handle Axios Errors
 */
const handleAxiosError = (err, res) => {
    if (err.response) {
        // The request was made, and the server responded with an error status
        res.status(err.response.status).json(err.response.data);
    } else if (err.request) {
        // The request was made, but no response was received
        res.status(500).json({ error: 'No response from user service', details: err.message });
    } else {
        // Something happened in setting up the request
        res.status(500).json({ error: 'Request error', details: err.message });
    }
};

module.exports = {
    register,
    login,
    getProfile,
    updateProfile,
    deleteUser,
};
