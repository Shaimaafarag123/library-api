// models/book.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
    genre: { type: mongoose.Schema.Types.ObjectId, ref: 'Genre' },
    // Add more fields as needed
});

module.exports = mongoose.model('Book', bookSchema);
