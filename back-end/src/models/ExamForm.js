const mongoose = require('mongoose');

module.exports = mongoose.model(
    'examForm',
    new mongoose.Schema({
        question: {
            type: String
        },
        option: [String],
        answer: {
            type: String,
            required: true
        }
    })
)