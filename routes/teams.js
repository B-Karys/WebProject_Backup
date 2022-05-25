const express = require("express");
const teamController = require("../controllers/Team");
const router = express.Router();

router.get('/', teamController.team);
router.get('/all', teamController.findAll);
router.post('/', teamController.create);
router.patch('/', teamController.addPlayer);


module.exports = router;