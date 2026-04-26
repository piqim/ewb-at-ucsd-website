const Member = require('../models/Member');

// TODO: implement getMembers
// - fetch all active members sorted by name ascending
// - return as JSON
// - catch errors and return 500 with the error message
const getMembers = async (req, res) => {};

// TODO: implement getMembersByProject
// - fetch all active members where project matches req.params.project
// - sort by name ascending
// - return as JSON
// - catch errors and return 500 with the error message
const getMembersByProject = async (req, res) => {};

module.exports = { getMembers, getMembersByProject };