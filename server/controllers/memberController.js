const Member = require('../models/Member');

const getMembers = async (req, res) => {
    try{
        const members = await Member.find({
            active: true
        }).sort({ name: 1});
        res.json(members);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

const getMembersByProject = async (req, res) => {
  try {
    const members = await Member.find({
      project: req.params.project,
      active: true,
    }).sort({ name: 1 });
    res.json(members);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getMembers, getMembersByProject };