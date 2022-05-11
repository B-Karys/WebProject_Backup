const express = require("express");
const path = require("path");
const UserController = require("../controllers/User");
const router = express.Router();
router.get('/profile', (req, res) => {
    res.render('profile', {title: 'profile'})
})

router.post('/', UserController.create);

module.exports = router;