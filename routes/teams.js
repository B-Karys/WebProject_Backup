const express = require("express");
const path = require("path");
const router = express.Router();
router.get('/teams', (req, res) => {
    res.render('teams', {title: 'teams'})
})
module.exports = router;