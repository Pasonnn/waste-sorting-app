const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    points: {
        type: Number,
        required: true,
        default: 0,
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'completed'],
        default: 'active',
    }
}, { timestamps: true });

module.exports = mongoose.model('Challenge', challengeSchema);
