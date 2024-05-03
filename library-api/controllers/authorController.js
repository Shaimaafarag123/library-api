const Author = require('../models/author');

// Controller for handling CRUD operations for authors
exports.getAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.json(authors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.createAuthor = async (req, res) => {
    const author = new Author({
        name: req.body.name,
        // Add more fields as needed
    });
    try {
        const newAuthor = await author.save();
        res.status(201).json(newAuthor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

// Implement updateAuthor and deleteAuthor as needed
