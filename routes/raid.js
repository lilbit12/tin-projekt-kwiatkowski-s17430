const express = require('express');
const router = express.Router();
const raidController = require('../controllers/raidController');


router.get('/', raidController.showRaidList);
router.get('/add', raidController.showAddRaidForm);



module.exports = router;