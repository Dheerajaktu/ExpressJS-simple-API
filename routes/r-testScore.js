const express = require('express');
const router = express.Router();
const { testScore } = require('../models');
const controller = require('../controller/con-testScore');


router.post('/assignTestScore', controller.assignTestScore);
router.get('/getHighestScore', controller.highestScoreCandidate);

module.exports = router;
