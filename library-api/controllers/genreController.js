const Genre = require('../models/genre');

// Controller for handling CRUD operations for genres
exports.getGenres = async (req, res) => {
    try {
        const genres = await Genre.find();
        res.json(genres);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.createGenre = async (req, res) => {
    const genre = new Genre({
        name: req.body.name,
        // Add more fields as needed
    });
    try {
        const newGenre = await genre.save();
        res.status(201).json(newGenre);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

// Implement updateGenre and deleteGenre as needed
