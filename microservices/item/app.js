const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const itemRoutes = require('./api/routes/itemRoutes');

dotenv.config();

const app = express();
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
    res.send('Item service is running');
});

// Use item routes
app.use('/items', itemRoutes);

// Start the server
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Item service listening on port ${port}`);
});
