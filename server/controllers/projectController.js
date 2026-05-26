const Project = require('../models/Project');

// TODO: implement getProjects
// - fetch all projects from MongoDB sorted by createdAt descending
// - return as JSON
// - catch errors and return 500 with the error message
const getProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({createdAt: -1});
        res.json(projects);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// TODO: implement getProjectBySlug
// - find a single project matching req.params.slug
// - return 404 if not found
// - catch errors and return 500 with the error message
const getProjectBySlug = async (req, res) => {
    try {
        const projects = await Project.findOne({slug: req.params.slug});
        if (!project) {
            return res.status(404).json({message: 'Project not found'});
        }
        res.json(projects);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports = { getProjects, getProjectBySlug };