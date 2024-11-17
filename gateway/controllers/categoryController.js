const axios = require('axios');
const env = require('dotenv');
env.config();

// Base URL for the category service
const categoryServiceUrl = process.env.CATEGORY_SERVICE_URL;

/**
 * Create a new category
 */
const createCategory = async (req, res) => {
    try {
        const response = await axios.post(`${categoryServiceUrl}/create`, req.body);
        res.status(response.status).json(response.data);
    } catch (err) {
        handleAxiosError(err, res);
    }
};

/**
 * Get all categories
 */
const getAllCategories = async (req, res) => {
    try {
        const response = await axios.get(`${categoryServiceUrl}/all`);
        res.status(response.status).json(response.data);
    } catch (err) {
        handleAxiosError(err, res);
    }
};

/**
 * Get a single category by ID
 */
const getCategoryById = async (req, res) => {
    try {
        const response = await axios.get(`${categoryServiceUrl}/${req.params.id}`);
        res.status(response.status).json(response.data);
    } catch (err) {
        handleAxiosError(err, res);
    }
};

/**
 * Update a category by ID
 */
const updateCategory = async (req, res) => {
    try {
        const response = await axios.put(`${categoryServiceUrl}/${req.params.id}`, req.body);
        res.status(response.status).json(response.data);
    } catch (err) {
        handleAxiosError(err, res);
    }
};

/**
 * Delete a category by ID
 */
const deleteCategory = async (req, res) => {
    try {
        const response = await axios.delete(`${categoryServiceUrl}/${req.params.id}`);
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
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
};
