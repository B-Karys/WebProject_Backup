const express = require("express");
const path = require("path");
const router = express.Router();
router.get('/players', (req, res) => {
    res.render('players', {title: 'players'})
})
module.exports = router;