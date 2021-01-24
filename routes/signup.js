const express = require('express');
const router = express.Router();
const signController = require('../controllers/signController');


router.get('/', signController.showSignupsList);
router.get('/add/:raidId', signController.showAddSignForm);
router.get('/:raidId', signController.showSignupsListByRaidId);

router.post('/add/:raidId', signController.addSignup);
router.get('/delete/:signId', signController.deleteSignup);


module.exports = router;