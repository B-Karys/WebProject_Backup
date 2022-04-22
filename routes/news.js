const express = require("express");
const path = require("path");
const router = express.Router();
router.get('/news', (req, res) => {
    res.render('news', {text: "news"})
})

module.exports = router;
