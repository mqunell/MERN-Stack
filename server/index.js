const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const http = require('http');
require('dotenv').config();

// Create the Express app and add middleware
const app = express();
app.use(cors());
app.use(express.json()); // Parse req.body JSON

// Connect to MongoDB Atlas
mongoose.connection.once('open', () =>
	console.log('MongoDB Atlas connection established')
);

//mongoose.connect(process.env.MONGO_URI);

// Connect the routers
app.use('/api/user', require('./routers/user'));

// Serve the frontend
app.use(express.static('../client/build'));
app.get('*', (req, res) =>
	res.sendFile(path.join(__dirname, '../client/build/index.html'))
);

// Start the server
http.createServer(app).listen(5000, () => console.log('HTTP listening on port 5000'));
