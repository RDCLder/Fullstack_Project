const express = require("express");
const router = express.Router();
const db = require("../models/index.js");

router.get("/", (req, res) => {
    res.render("index", {
        pageTitle: "Home",
        pageID: "home"
    });
});

module.exports = router;