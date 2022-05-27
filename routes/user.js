const express = require('express')
const userController = require('../controllers/User.js')
const router = express.Router();

router.get('/', userController.findAll);
router.get('/id:id',userController.findOne);
router.post('/', userController.create);
router.patch('/:nickname', userController.update);
router.delete('/:nickname', userController.destroy);

module.exports = router