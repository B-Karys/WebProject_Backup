const express = require("express");
const path = require("path");
const router = express.Router();
router.get('/', (req, res) => {
    res.render('profile', {title: 'profile'})
})

module.exports = router;