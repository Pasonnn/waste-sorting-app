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
    } catch (error) {
        handleAxiosError(error, res);
    }
};

/**
 * Get all categories
 */
const getAllCategories = async (req, res) => {
    try {
        const response = await axios.get(`${categoryServiceUrl}/all`);
        res.status(response.status).json(response.data);
    } catch (error) {
        handleAxiosError(error, res);
    }
};

/**
 * Get a single category by ID
 */
const getCategoryById = async (req, res) => {
    try {
        const response = await axios.get(`${categoryServiceUrl}/${req.params.id}`);
        res.status(response.status).json(response.data);
    } catch (error) {
        handleAxiosError(error, res);
    }
};

/**
 * Update a category by ID
 */
const updateCategory = async (req, res) => {
    try {
        const response = await axios.put(`${categoryServiceUrl}/${req.params.id}`, req.body);
        res.status(response.status).json(response.data);
    } catch (error) {
        handleAxiosError(error, res);
    }
};

/**
 * Delete a category by ID
 */
const deleteCategory = async (req, res) => {
    try {
        const response = await axios.delete(`${categoryServiceUrl}/${req.params.id}`);
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
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
};
