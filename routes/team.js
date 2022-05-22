const express = require("express");
const path = require("path");
const teamController = require("../controllers/Team");
const router = express.Router();

router.get('/', teamController.findAll);
router.post('/', teamController.create);
router.patch('/', teamController.addPlayer);

module.exports = router;