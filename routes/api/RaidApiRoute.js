const express = require('express');
const router = express.Router();

const raidApiController = require('../../api/RaidAPI');

router.get('/', raidApiController.getRaids);
router.get('/:raidName', raidApiController.getRaidByName);
router.post('/', raidApiController.createRaid)
/*
router.put('/:playerId', playerApiController.updatePlayer);
router.delete('/:playerId', playerApiController.deletePlayer);*/

module.exports = router;