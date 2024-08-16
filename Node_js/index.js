// Importing required modules
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const connectDB = require('./database/db');
const cors = require('cors');
const multiparty = require('connect-multiparty');
const cloudinary = require('cloudinary');
const fs = require('fs');
const https = require('https');
const http = require('http');
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
    cloud_name: 'dijumqkat',
    api_key: '151478613391516',
    api_secret: 'lDMAHtAK-gScVPPtCsMc6WeJnzg',
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

// Define HTTPS port and certificate paths
const PORT = process.env.PORT || 5000; // Ensure PORT is defined in your .env file or fallback to 5000
const SSL_PORT = process.env.SSL_PORT || 443; // SSL Port, typically 443

// Make sure the paths below are correct and point to the actual files
const sslOptions = {
    key: fs.readFileSync(path.join(__dirname, 'Certificates', 'private.key')), // Replace with your actual private key
    csr: fs.readFileSync(path.join(__dirname, 'Certificates', 'cer.csr')), // Replace with your actual certificate
};

// Create HTTPS server
https.createServer(sslOptions, app).listen(SSL_PORT, () => {
    console.log(`HTTPS server running on port ${SSL_PORT}`);
});

// Create HTTP server to redirect to HTTPS
http.createServer((req, res) => {
    res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
    res.end();
}).listen(PORT, () => {
    console.log(`HTTP server running on port ${PORT} and redirecting to HTTPS`);
});

// Exporting
module.exports = app;
