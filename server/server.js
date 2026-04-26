const express   = require('express');
const cors      = require('cors');
const dotenv    = require('dotenv');
const connectDB = require('./config/db');

// TODO: load environment variables and call connectDB()

const app = express();

// TODO: add middleware for CORS and JSON body parsing

// TODO: mount the four route files at their correct /api paths

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.use((req, res) => res.status(404).json({ message: 'Route not found' }));

// TODO: read PORT from environment and start the server