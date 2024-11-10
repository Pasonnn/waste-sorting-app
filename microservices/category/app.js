// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const categoryRoutes = require('./api/routes/categoryRoutes');

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Failed to connect to MongoDB:', error));

// Basic route to verify the service is running
app.get('/', (req, res) => {
  res.send('Category service is running');
});

// Use category routes
app.use('/categories', categoryRoutes);

// Define the port from environment variables
const port = process.env.PORT;

// Start the server
app.listen(port, () => {
  console.log(`Category service listening on port ${port}`);
});
