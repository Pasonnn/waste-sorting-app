const User = require('../models/userModel'); // Import User model for database interaction
const bcrypt = require('bcrypt');            // Import bcrypt for password hashing
const jwt = require('jsonwebtoken');         // Import JSON Web Token for authentication

// Register a new user
exports.register = async (req, res) => {
  try {
    console.log("Hello");
    const { name, email, password } = req.body; // Extract user details from request

    // Check if user already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash the user's password for security
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with hashed password and save to database
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user' }); // Handle registration errors
  }
};

// Login a user and generate a JWT token
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body; // Extract login credentials

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Validate the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Generate a JWT token for authenticated user
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ error: 'Failed to login user' }); // Handle login errors
  }
};

// Get user profile
exports.getProfile = async (req, res) => {
  try {
    const userId = req.user.userId; // Extract user ID from request (assumes user is authenticated)

    // Retrieve user data by ID, excluding the password field
    const user = await User.findById(userId).select('-password');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user); // Send user profile data as JSON
  } catch (error) {
    res.status(500).json({ error: 'Failed to get user profile' }); // Handle profile retrieval errors
  }
};
