const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Routes for users
router.get('/', userController.getUsers);
router.post('/', userController.createUser);
// Implement update and delete routes as needed

module.exports = router;
