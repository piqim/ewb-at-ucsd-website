const mongoose = require('mongoose');

// TODO: define a statSchema with fields:
// - label (required)
// - value as Number type (required)
// - prefix (default empty string)
// - suffix (default empty string)
// - order as Number (default 0)
// add timestamps option

const statSchema = new mongoose.Schema ({
    label: {type: String, required: true},
    value: {type: Number, required: true},
    prefix: {type: String, default: ''},
    suffix: {type: String, default: ''},
    order: {type: Number, default: 0},
}, {timestamps: true});

module.exports = mongoose.model('Stat', statSchema);