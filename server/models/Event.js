const mongoose = require('mongoose');

// TODO: define an eventSchema with fields:
// - title (required)
// - date as Date type (required)
// - location (required)
// - description (default empty string)
// - link (default empty string)
// add timestamps option

module.exports = mongoose.model('Event', eventSchema);