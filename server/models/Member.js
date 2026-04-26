const mongoose = require('mongoose');

// TODO: define a memberSchema with fields:
// - name (required)
// - role (required)
// - project (required)
// - photo (default empty string)
// - active (default true)
// add timestamps option

module.exports = mongoose.model('Member', memberSchema);