const mongoose = require('mongoose');
const dotenv   = require('dotenv');
dotenv.config();

const Project = require('./models/Project');
const Member  = require('./models/Member');
const Event   = require('./models/Event');
const Stat    = require('./models/Stat');

const projects = require('../src/data/projects.json');
const members  = require('../src/data/members.json');
const events   = require('../src/data/events.json');
const stats    = require('../src/data/stats.json');

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    await Promise.all([
      Project.deleteMany(),
      Member.deleteMany(),
      Event.deleteMany(),
      Stat.deleteMany(),
    ]);
    console.log('Cleared existing collections');

    await Project.insertMany(projects);
    await Member.insertMany(members);
    await Event.insertMany(events);
    await Stat.insertMany(stats);

    console.log('✅ Seed complete');
    process.exit(0);
  } catch (err) {
    console.error('Seed error:', err.message);
    process.exit(1);
  }
};

seed();
