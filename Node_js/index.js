// Importing required modules
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const connectDB = require('./database/db');
const cors = require('cors');
const multiparty = require('connect-multiparty');
const cloudinary = require('cloudinary');
const path = require('path');

// Making express app
const app = express();

// dotenv config
dotenv.config();

// CORS policy
const corsPolicy = {
    origin: true,
    credentials: true,
    optionSuccessStatus: 200,
};
app.use(cors(corsPolicy));

// Multipart middleware
app.use(multiparty());

// Cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME, // Secure your credentials using environment variables
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

// JSON middleware (to accept JSON data)
app.use(express.json());

// MongoDB connection
connectDB();

// User Route
app.use('/api/user', require('./routes/userRoutes'));

// Party Routes
app.use('/api/party', require('./routes/partyRoutes'));

// Vote Route
app.use('/api/vote', require('./routes/voteRoutes'));

// Progress API
app.use('/api/progress', require('./routes/progressRoute'));

// Test route
app.get('/test', (req, res) => {
    res.send('Hello from Express server');
});

// Define HTTP port
const PORT = process.env.PORT || 5000; // HTTP Port

// Create HTTP server
app.listen(PORT, () => {
    console.log(`HTTP server running on port ${PORT}`);
});

// Exporting
module.exports = app;
