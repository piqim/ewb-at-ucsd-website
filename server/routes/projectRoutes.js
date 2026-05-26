const express = require('express');
const router  = express.Router();
const { getProjects, getProjectBySlug } = require('../controllers/projectController');

// TODO: register GET / to getProjects
// TODO: register GET /:slug to getProjectBySlug

router.get('/', getProjects);
router.get('/:slug', getProjectBySlug);

module.exports = router;