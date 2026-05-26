const Event = require('../models/Event');

// TODO: implement getEvents
// - fetch only events where date is >= today (no past events)
// - sort by date ascending
// - return as JSON
// - catch errors and return 500 with the error message
const getEvents = async (req, res) => {
    try {
        const events = await Event.find({date: { $gte: new Date()}}).sort({date: 1});
        res.json(events);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports = { getEvents };