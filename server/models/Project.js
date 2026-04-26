const mongoose = require('mongoose');

// TODO: define a timelineItemSchema with fields:
// - date (required)
// - title (required)
// - description (required)

// TODO: define a projectSchema with fields:
// - slug (required, unique)
// - name (required)
// - tagline (required)
// - description (required)
// - status with enum: active, planning, completed — default: planning
// - timeline (array of timelineItemSchema)
// - gallery (array of strings)
// add timestamps option

module.exports = mongoose.model('Project', projectSchema);