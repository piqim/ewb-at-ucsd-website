const Stat = require('../models/Stat');

// TODO: implement getStats
// - fetch all stats sorted by the order field ascending
// - return as JSON
// - catch errors and return 500 with the error message
const getStats = async (req, res) => {
    try {
        const stats = await Stat.find().sort({order: 1});
        res.json(stats);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports = { getStats };