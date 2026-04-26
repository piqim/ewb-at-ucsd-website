const mongoose = require('mongoose');

// TODO: define a statSchema with fields:
// - label (required)
// - value as Number type (required)
// - prefix (default empty string)
// - suffix (default empty string)
// - order as Number (default 0)
// add timestamps option

module.exports = mongoose.model('Stat', statSchema);