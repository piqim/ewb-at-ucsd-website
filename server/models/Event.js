const mongoose = require('mongoose');

// TODO: define an eventSchema with fields:
// - title (required)
// - date as Date type (required)
// - location (required)
// - description (default empty string)
// - link (default empty string)
// add timestamps option

const eventSchema = new mongoose.Schema ({
    title: {type: String, required: true},
    date: {type: String, required: true},
    location: {type: String, required: true},
    description: {type: String, default: ''},
    link: {type: String, default: ''},
}, {timestamps: true});

module.exports = mongoose.model('Event', eventSchema);