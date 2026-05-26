const express = require('express');
const router  = express.Router();
const { getStats } = require('../controllers/statController');

// TODO: register GET / to getStats

router.get('/', getStats);

module.exports = router;