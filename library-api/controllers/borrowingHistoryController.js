const BorrowingHistory = require('../models/borrowingHistory');

// Controller for handling CRUD operations for borrowing history
exports.getBorrowingHistory = async (req, res) => {
    try {
        const history = await BorrowingHistory.find();
        res.json(history);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.createBorrowingRecord = async (req, res) => {
    const borrowingRecord = new BorrowingHistory({
        user: req.body.user,
        book: req.body.book,
        borrowDate: req.body.borrowDate,
        returnDate: req.body.returnDate,
        // Add more fields as needed
    });
    try {
        const newRecord = await borrowingRecord.save();
        res.status(201).json(newRecord);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

// Implement updateBorrowingRecord and deleteBorrowingRecord as needed
