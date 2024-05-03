const express = require('express');
const router = express.Router();
const borrowingHistoryController = require('../controllers/borrowingHistoryController');

// Routes for borrowing history
router.get('/', borrowingHistoryController.getBorrowingHistory);
router.post('/', borrowingHistoryController.createBorrowingRecord);
// Implement update and delete routes as needed

module.exports = router;
