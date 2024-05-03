const express = require('express');
const router = express.Router();
const genreController = require('../controllers/genreController');

// Routes for genres
router.get('/', genreController.getGenres);
router.post('/', genreController.createGenre);
// Implement update and delete routes as needed

module.exports = router;
