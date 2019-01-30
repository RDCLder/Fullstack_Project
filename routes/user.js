let express = require("express");
let router = express.Router();
const db = require("./../models/");

router.get("/user", (req, res) => {
    res.redirect("/");
})

router.get("/user/:username", (req, res) => {
    let username = req.params.username;
    if (!req.user || req.user.username != username) {
        res.redirect("/login");
        return;
    }
    else {
        res.render("user", {
            pageTitle: `${req.user.username}'s Profile`,
            pageID: `profile:${req.user.id}`,
            pageType: "profile",
            isLoggedIn: true,
            user: req.user,
            username: username,
            email: `${req.user.email}`,
        });
    }
});

module.exports = router;