const express = require("express");
const router = express.Router();
const db = require("./../models/");

router.get("/", (req, res) => {

    if (!req.isAuthenticated()) {
        res.render("index", {
            pageTitle: "Home",
            pageID: "home",
            isLoggedIn: false
        });
    }
    else {
        res.render("index", {
            pageTitle: "Home",
            pageID: "home",
            isLoggedIn: true,
            user: req.user
        });
    }
});

module.exports = router;