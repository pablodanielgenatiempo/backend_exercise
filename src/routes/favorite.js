'use strict';

const express = require("express");
const controller = require('../controllers/favoriteController');
const router = express.Router();

router.delete('', controller.remove);
router.post('', controller.add);

module.exports = router;