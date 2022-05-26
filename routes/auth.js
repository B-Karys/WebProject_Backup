const express = require("express");
const path = require("path");
const UserModel = require("../model/user");
const router = express.Router();
const bcrypt = require("bcrypt");
const {genSaltSync} = require("bcrypt");
const controller = require("../controllers/authController")

router.get('/register', controller.getRegister);
router.get('/login', controller.getLogin);
router.post('/register', controller.register);
router.post('/login', controller.login);
module.exports = router;
