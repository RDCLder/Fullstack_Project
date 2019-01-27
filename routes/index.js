const express = require("express");
const router = express.Router();
const db = require("./../models/");

router.get("/", (req, res) => {

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            req.isLogged = true;
            return next();
        }
        res, redirect("/");
    }

    res.render("index", {
        pageTitle: "Home",
        pageID: "home",
        isLoggedIn: req.isAuthenticated(),
        user: req.user
    });
});

module.exports = router;