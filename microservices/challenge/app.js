// app.js
// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const challengeRoutes = require('./api/routes/challengeRoutes');

// Load environment variables from .env file
dotenv.config();

// Create an instance of Express
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

  // Define the main route
app.get('/', (req, res) => {
    res.send('Challenge service is running');
  });

// Use challenge routes
app.use('/challenges', challengeRoutes);

// Start the server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Challenge service listening on port ${port}`);
});
