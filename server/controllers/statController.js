const Stat = require('../models/Stat');

const getStats = async (req, res) => {
    try{
        const stats = await Stat.find().sort({ order: 1 });
        res.json(stats);
    } catch (err){
        res.status(500).json({
            message: err.message
        });
    }
};

module.exports = { getStats };