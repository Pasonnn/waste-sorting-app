const mongoose = require('mongoose'); // Import Mongoose library to work with MongoDB
const Schema = mongoose.Schema;       // Define Schema constructor from Mongoose

// Define the schema for User with fields and validation
const userSchema = new Schema({
  name: {
    type: String,                       // Name field as a string
    required: 'Name cannot be blank'    // Validation message if name is missing
  },
  email: {
    type: String,                       // Email field as a string
    required: 'Email cannot be blank',  // Validation message if email is missing
    unique: true                        // Ensure each email is unique
  },
  password: {
    type: String,                       // Password field as a string
    required: 'Password cannot be blank'// Validation message if password is missing
  }
}, {timestamps: true});

// Export the User model based on the defined schema
module.exports = mongoose.model('User', userSchema);
