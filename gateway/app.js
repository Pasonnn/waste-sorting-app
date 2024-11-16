const express = require("express");
const routes = require("./src/routes");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

// Routes
app.use("/", routes);

// Health check endpoint
app.get("/", (req, res) => res.send("Gateway is running"));

// Start the server
app.listen(PORT, () => console.log(`Gateway running on port ${PORT}`));
