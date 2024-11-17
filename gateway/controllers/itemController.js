const axios = require('axios');
const env = require('dotenv');
env.config();

// Base URL for the user service
const itemServiceUrl = process.env.USER_SERVICE_URL;

/**
 * Create a new item
 */
const createItem = async (req, res) => {
    try {
        const response = await axios.post(`${itemServiceUrl}/create`, req.body);
        res.status(response.status).json(response.data);
    } catch (error) {
        handleAxiosError(error, res);
    }
};

/**
 * Get all items
 */
const getAllItems = async (req, res) => {
    try {
        const response = await axios.get(`${itemServiceUrl}/all`);
        res.status(response.status).json(response.data);
    } catch (error) {
        handleAxiosError(error, res);
    }
};

/**
 * Get a single item by ID
 */
const getItemById = async (req, res) => {
    try {
        const response = await axios.get(`${itemServiceUrl}/${req.params.id}`);
        res.status(response.status).json(response.data);
    } catch (error) {
        handleAxiosError(error, res);
    }
};

/**
 * Update an item by ID
 */
const updateItem = async (req, res) => {
    try {
        const response = await axios.put(`${itemServiceUrl}/${req.params.id}`, req.body);
        res.status(response.status).json(response.data);
    } catch (error) {
        handleAxiosError(error, res);
    }
};

/**
 * Delete an item by ID
 */
const deleteItem = async (req, res) => {
    try {
        const response = await axios.delete(`${itemServiceUrl}/${req.params.id}`);
        res.status(response.status).json(response.data);
    } catch (error) {
        handleAxiosError(error, res);
    }
};

module.exports = {
    createItem,
    getAllItems,
    getItemById,
    updateItem,
    deleteItem,
};
