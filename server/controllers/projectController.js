const Project = require('../models/Project');

// TODO: implement getProjects
// - fetch all projects from MongoDB sorted by createdAt descending
// - return as JSON
// - catch errors and return 500 with the error message
const getProjects = async (req, res) => {};

// TODO: implement getProjectBySlug
// - find a single project matching req.params.slug
// - return 404 if not found
// - catch errors and return 500 with the error message
const getProjectBySlug = async (req, res) => {};

module.exports = { getProjects, getProjectBySlug };