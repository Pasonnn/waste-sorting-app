const express = require("express");
const axios = require("axios");
const { services } = require("./config/config");
const router = express.Router();

// Middleware for authentication
const authenticateUser = (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
        return res.status(401).json({ error: "Access denied. No token provided." });
    }

    try {
        const decoded = require("jsonwebtoken").verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).json({ error: "Invalid token." });
    }
};

// Proxy request to a service
const proxyRequest = async (req, res, serviceUrl) => {
    try {
        const url = `${serviceUrl}${req.originalUrl}`;
        const response = await axios({
            method: req.method,
            url,
            data: req.body,
            headers: { Authorization: req.header("Authorization") },
        });
        res.status(response.status).json(response.data);
    } catch (err) {
        if (err.response) {
            res.status(err.response.status).json(err.response.data);
        } else {
            res.status(500).json({ error: "Gateway error", details: err.message });
        }
    }
};

// Routes
router.use("/categories", authenticateUser, (req, res) => proxyRequest(req, res, services.category));
router.use("/challenges", authenticateUser, (req, res) => proxyRequest(req, res, services.challenge));
router.use("/items", authenticateUser, (req, res) => proxyRequest(req, res, services.item));
router.use("/users", (req, res) => proxyRequest(req, res, services.user));

module.exports = router;
