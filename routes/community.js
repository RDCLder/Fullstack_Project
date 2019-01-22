const express = require("express");
const router = express.Router();
const db = require("../models/database.js");

router.get('/community', (req,res) => {
    res.render("community", {
        pageTitle: 'Communities',
        pageID: 'community'
    })
})
module.exports = router;