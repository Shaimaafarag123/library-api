const User = require('../models/user');

// Controller for handling CRUD operations for users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.createUser = async (req, res) => {
    const user = new User({
        username: req.body.username,
        // Add more fields as needed
    });
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

// Implement updateUser and deleteUser as needed
