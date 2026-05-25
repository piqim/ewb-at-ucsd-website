const express = require('express');
const router  = express.Router();
const { getMembers, getMembersByProject } = require('../controllers/memberController');

router.get('/', getMembers);
router.get('/:project', getMembersByProject);

module.exports = router;