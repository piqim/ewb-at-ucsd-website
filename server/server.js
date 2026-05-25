const express   = require('express');
const cors      = require('cors');
const dotenv    = require('dotenv');
const connectDB = require('./config/db');

// TODO: load environment variables and call connectDB()

dotenv.config();
connectDB();

const app = express();

// TODO: add middleware for CORS and JSON body parsing

app.use(cors());
app.use(express.json());

// TODO: mount the four route files at their correct /api paths

app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/members', require('./routes/memberRoutes'));
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/stats', require('./routes/statRoutes'));

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.use((req, res) => res.status(404).json({ message: 'Route not found' }));

// TODO: read PORT from environment and start the server

const port = process.env.port || 5000;
app.listen(port, () => console.log('Server running on port ${port}'));