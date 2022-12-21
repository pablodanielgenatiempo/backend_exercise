'use strict';

const express = require("express");
const controller = require('../controllers/launchController');
const router = express.Router();

router.get('', controller.get);

module.exports = router;