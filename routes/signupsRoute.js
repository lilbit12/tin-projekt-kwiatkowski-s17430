const express = require('express');
const router = express.Router();
const singController = require('../controllers/signController');
router.get('/', singController.showSignupsList);


module.exports = router;