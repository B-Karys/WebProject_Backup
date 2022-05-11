const express = require('express')
const userController = require('../controllers/User.js')
const router = express.Router();

router.post('/', userController.create);


module.exports = router