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

const timelineItemSchema = new mongoose.Schema ({
    date: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true}
});

const projectSchema = new mongoose.Schema ({
    slug: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    tagline: {type: String, required: true},
    description: {type: String, required: true},
    status: {type: String, enum: ['active', 'planning', 'completed'], default: 'planning'},
    timeline: [timelineItemSchema],
    gallery: [{type: String}],
}, {timestamps: true});

module.exports = mongoose.model('Project', projectSchema);