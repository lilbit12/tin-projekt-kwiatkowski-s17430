const express = require('express');
const router = express.Router();
const raidController = require('../controllers/raidController');


router.get('/', raidController.showRaidList);
router.get('/add', raidController.showAddRaidForm);
router.get('/edit/:raidId', raidController.showEditRaidForm);


router.post('/add', raidController.addRaid);
router.post('/edit', raidController.updateRaid);
router.get('/delete/:raidId', raidController.deleteRaid);



module.exports = router;