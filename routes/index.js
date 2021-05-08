const express = require('express');
const { candidate } = require('../models');
const router = express.Router();
const controller = require('../controller/con-candidate');

router.post('/addCandidate', controller.addNewCandidate);


module.exports = router;