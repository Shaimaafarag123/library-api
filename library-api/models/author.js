const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    // Add more fields as needed
});

module.exports = mongoose.model('Author', authorSchema);
