const mongoose = require('mongoose');

// TODO: define a memberSchema with fields:
// - name (required)
// - role (required)
// - project (required)
// - photo (default empty string)
// - active (default true)
// add timestamps option

const memberSchema = new mongoose.Schema ({
    name: {type: String, required: true},
    role: {type: String, required: true},
    project: {type: String, required: true},
    photo: {type: String, default: ''},
    active: {type: Boolean, default: true},
}, {timestamps: true});

module.exports = mongoose.model('Member', memberSchema);