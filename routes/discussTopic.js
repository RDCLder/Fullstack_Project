const express = require("express");
const router = express.Router();
const db = require("../models/");

router.get("/discussTopic", (req, res) => {
    if (!req.user) {
        res.render("discussTopic", {
            pageTitle: "Discuss Topic",
            pageID: "discussTopic",
            pageType: "submission",
            isLoggedIn: false
        })
    }
    else {
        res.render("discussTopic", {
            pageTitle: "Discuss Topic",
            pageID: "discussTopic",
            pageType: "submission",
            isLoggedIn: true
        })
    }
})

module.exports = router;