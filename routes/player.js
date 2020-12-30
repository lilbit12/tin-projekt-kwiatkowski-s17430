const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');
router.get('/', playerController.showPlayerList);


module.exports = router;