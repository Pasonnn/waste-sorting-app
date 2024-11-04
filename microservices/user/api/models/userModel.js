// userModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: 'Name can not be blank'
  },
  email: {
    type: String,
    required: 'Email can not be blank',
    unique: true
  },
  password: {
    type: String,
    required: 'Password can not be blank'
  }
});

module.exports = mongoose.model('User', userSchema);
