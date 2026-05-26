const Member = require('../models/Member');

// TODO: implement getMembers
// - fetch all active members sorted by name ascending
// - return as JSON
// - catch errors and return 500 with the error message
const getMembers = async (req, res) => {
    try {
        const members = await Member.find({active: true}).sort({name: 1});
        res.json(members);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// TODO: implement getMembersByProject
// - fetch all active members where project matches req.params.project
// - sort by name ascending
// - return as JSON
// - catch errors and return 500 with the error message
const getMembersByProject = async (req, res) => {
    try {
        const members = await Member.find({project: req.params.project, active: true}).sort({name: 1});
        res.json(members);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports = { getMembers, getMembersByProject };