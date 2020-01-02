const path = require('path');
const express = require('express');
const env = require('dotenv');
const cors = require('cors');
const db = require('../database/config');

// environment configuration
env.config({ path: './config/config.env' });

// database connection
db();

const app = express();
// Body parsing middleware
app.use(express.json());

// enable node cors middleware
app.use(cors());

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
	console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
