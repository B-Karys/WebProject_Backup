const express = require('express')
const userController = require('../controllers/User.js')
const router = express.Router();

router.post('/', userController.create);
router.patch('/:nickname', userController.update);


module.exports = router