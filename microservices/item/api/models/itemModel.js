const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Item name cannot be blank",
        trim: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: "Category is required",
    },
    description: {
        type: String,
        trim: true,
    },
    disposalInstructions: {
        type: String,
        trim: true,
    },
    recyclable: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);
