const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "Title cannot be blank",
        trim: true,
    },
    description: {
        type: String,
        required: "Description cannot be blank",
    },
    points: {
        type: Number,
        required: "Point cannot be blank",
        default: 0,
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'completed'],
        default: 'active',
    }
}, { timestamps: true });

module.exports = mongoose.model('Challenge', challengeSchema);
