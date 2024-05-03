const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

// Routes for authors
router.get('/', authorController.getAuthors);
router.post('/', authorController.createAuthor);
// Implement update and delete routes as needed

module.exports = router;
