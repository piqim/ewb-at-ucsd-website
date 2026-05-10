const mongoose = require('mongoose');

const timelineItemSchema = new mongoose.Schema({
  date:        { type: String, required: true },
  title:       { type: String, required: true },
  description: { type: String, required: true },
});

const projectSchema = new mongoose.Schema({
  slug:        { type: String, required: true, unique: true },
  name:        { type: String, required: true },
  tagline:     { type: String, required: true },
  description: { type: String, required: true },
  status:      { type: String, enum: ['active', 'planning', 'completed'], default: 'planning' },
  timeline:    [timelineItemSchema],
  gallery:     [String],
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);