const axios = require('axios');
const env = require('dotenv');
env.config();

// Base URL for the user service
const itemServiceUrl = process.env.ITEM_SERVICE_URL;

/**
 * Create a new item
 */
const createItem = async (req, res) => {
    try {
        const response = await axios.post(`${itemServiceUrl}/create`, req.body);
        res.status(response.status).json(response.data);
    } catch (err) {
        handleAxiosError(err, res);
    }
};

/**
 * Get all items
 */
const getAllItems = async (req, res) => {
    try {
        const response = await axios.get(`${itemServiceUrl}/all`);
        res.status(response.status).json(response.data);
    } catch (err) {
        handleAxiosError(err, res);
    }
};

/**
 * Get a single item by ID
 */
const getItemById = async (req, res) => {
    try {
        const response = await axios.get(`${itemServiceUrl}/${req.params.id}`);
        res.status(response.status).json(response.data);
    } catch (err) {
        handleAxiosError(err, res);
    }
};

/**
 * Update an item by ID
 */
const updateItem = async (req, res) => {
    try {
        const response = await axios.put(`${itemServiceUrl}/${req.params.id}`, req.body);
        res.status(response.status).json(response.data);
    } catch (err) {
        handleAxiosError(err, res);
    }
};

/**
 * Delete an item by ID
 */
const deleteItem = async (req, res) => {
    try {
        const response = await axios.delete(`${itemServiceUrl}/${req.params.id}`);
        res.status(response.status).json(response.data);
    } catch (err) {
        handleAxiosError(err, res);
    }
};

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
    createItem,
    getAllItems,
    getItemById,
    updateItem,
    deleteItem,
};
