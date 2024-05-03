const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
// Import other routes as needed

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

// Connect to MongoDB
mongoose.connect('mongodb+srv://faragshaimaa931:shaimaa_22@cluster0.lwk0d60.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Use routes
app.use('/api/books', bookRoutes);
// Use other routes as needed

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
