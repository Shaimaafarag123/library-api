const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    // Add more fields as needed
});

module.exports = mongoose.model('User', userSchema);
