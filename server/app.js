const path = require('path');
const express = require('express');
const env = require('dotenv');
const cors = require('cors');
const db = require('../database/config');

env.config({ path: './config/config.env' });

db();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
	console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
