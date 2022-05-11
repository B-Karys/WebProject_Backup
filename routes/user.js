const express = require('express')
const profileController = require('../controllers/Profile')
const router = express.Router();

router.post('/', profileController.create);


module.exports = router