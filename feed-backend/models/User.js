// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true },
    userType: { type: String, enum: ['Producer', 'Consumer'], required: true }
});

module.exports = mongoose.model('User', userSchema);
