const mongoose = require('mongoose');

const borrowingHistorySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    borrowDate: { type: Date, required: true },
    returnDate: { type: Date },
    // Add more fields as needed
});

module.exports = mongoose.model('BorrowingHistory', borrowingHistorySchema);
