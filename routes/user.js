let express = require("express");
let router = express.Router();
const db = require("./../models/");

router.get("/user", (req, res) => {
    if (!req.isAuthenticated()) {
        res.redirect("/login");
        return;
    }
    
    console.log(req.user.id);
    res.send("you've arrived here, so you must be authenticated");
});

router.get("/user/:username", (req, res) => {
    var username = db.user[req.params.username];
    res.render("user", {
        pageTitle: username,
        pageID: username
    });
});

module.exports = router;