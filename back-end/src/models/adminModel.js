const mongoose = require('mongoose');

module.exports = mongoose.model(
    'admin',
    new mongoose.Schema({
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    })
)