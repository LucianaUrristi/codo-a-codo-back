const express = require('express');
const router = express.Router();
const fanArtController = require('../controllers/fanArt.controller');

router.get('/', fanArtController.index);

module.exports = router;