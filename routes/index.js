const express = require("express");
const router = express.Router();
const db = require("./../models/");

router.get("/", (req, res) => {

    if (!req.isAuthenticated()) {
        console.log("NOT AUTHENTICATED!");
        res.render("index", {
            pageTitle: "Home",
            pageID: "index",
            isLoggedIn: false
        });
    }
    else if (req.isAuthenticated()) {
        console.log("AUTHENTICATED!");
        console.log(req.user.username);
        res.render("index", {
            pageTitle: "Home",
            pageID: "index",
            isLoggedIn: true,
            user: req.user
        });
    }
});

module.exports = router;