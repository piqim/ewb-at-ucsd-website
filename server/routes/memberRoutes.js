const express = require('express');
const router  = express.Router();
const { getMembers, getMembersByProject } = require('../controllers/memberController');
const { get } = require('mongoose');

// TODO: register GET / to getMembers
// TODO: register GET /:project to getMembersByProject

router.get('/', getMembers);
router.get('/:project', getMembersByProject);

module.exports = router;