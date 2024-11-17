const express = require("express");
const dotenv = require("dotenv");
const userRoutesGateway = require("./routes/userRoutesGateway");
const categoryRoutesGateway = require("./routes/categoryRoutesGateway");
const challengeRoutesGateway = require("./routes/categoryRoutesGateway")
const itemRoutesGateway = require("./routes/itemRoutesGateway")

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

// // Routes
// app.use("/", routes);

app.use('/users', userRoutesGateway);
app.use('/categories', categoryRoutesGateway);
app.use('/challenges', challengeRoutesGateway);
app.use('/items', itemRoutesGateway);

// Health check endpoint
app.get("/", (req, res) => res.send("Gateway is running"));

// Start the server
app.listen(PORT, () => console.log(`Gateway running on port ${PORT}`));