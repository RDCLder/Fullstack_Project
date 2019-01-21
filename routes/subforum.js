const express = require("express");
const router = express.Router();
const db = require("../models/database.js");

router.get('/subforum', (req,res) => {
    res.render("subforum", {
        pageTitle: 'Subforums',
        pageID: 'subforum'
    })
})
module.exports = router;