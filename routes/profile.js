const express = require("express");
const path = require("path");
const ProfileController = require("../controllers/Profile");
const router = express.Router();
router.get('/profile', (req, res) => {
    res.render('profile', {title: 'profile'})
})

router.post('/', ProfileController.create);

module.exports = router;