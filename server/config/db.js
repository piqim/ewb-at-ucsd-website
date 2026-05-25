const mongoose = require('mongoose');

// TODO: create an async function called connectDB that:
// - connects to MongoDB using mongoose.connect() with process.env.MONGO_URI
// - logs the connected host on success
// - logs the error message and exits the process on failure

module.exports = connectDB;

const connectDB = async () => {
    try {
        const connection = mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected: ${conn.connection.honest}')
    } catch (error) {
        console.error('Error: ${error.message}');
        process.exit(1);
    }
}