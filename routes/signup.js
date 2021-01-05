const express = require('express');
const router = express.Router();
const singController = require('../controllers/signController');


router.get('/', singController.showSignupsList);
router.get('/add/:raidId', singController.showAddSignForm);

router.post('/add/:raidId', singController.addSignup);



module.exports = router;