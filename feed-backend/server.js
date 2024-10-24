// server.js or app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Import path module
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from feed-frontend
app.use(express.static(path.join(__dirname, '../feed-frontend'))); // Adjust path as necessary

// Example of handling registration
app.post('/auth/register', (req, res) => {
    const { fullName, email, phoneNumber, password, gender } = req.body;

    // Add your logic to save user data to a database

    // Redirect to login page after successful registration
    res.redirect('login.html'); // Absolute path
});

// Example for handling login
app.post('/auth/login', (req, res) => {
    const { email, password } = req.body;
    // Your logic for logging in the user
    // If successful, redirect based on user type
    // For example, using session or JWT to determine user type
    const userType = 'producer'; // Assume you get this from your login logic

    if (userType === 'producer') {
        res.redirect('producer.html'); // Absolute path
    } else {
        res.redirect('consumer.html'); // Absolute path
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
