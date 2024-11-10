const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Category name cannot be blank",
        trim: true,
    },
    description: {
        type: String,
        required: "Description cannot be blank",
        trim: true,
    },
}, {timestamps: true});

module.exports = mongoose.model('Category', categorySchema);