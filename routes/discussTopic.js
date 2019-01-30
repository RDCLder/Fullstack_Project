const express = require("express");
const router = express.Router();
const db = require("../models/");
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));

router.get("/discussTopic", (req, res) => {
    if (!req.user) {
        res.render("discussTopic", {
            pageTitle: "Discuss Topic",
            pageID: "discussTopic",
            pageType: "submission",
            isLoggedIn: false
        });
    } else {
        res.render("discussTopic", {
            pageTitle: "Discuss Topic",
            pageID: "discussTopic",
            pageType: "submission",
            isLoggedIn: true
        });
    }
});

router.post("/discussTopic", (req, res) => {
    var title = req.body.title;
    var body = req.body.body;
    db.topic
        .create({
            title: title,
            body: body,
            community_id: req.body.communitySearchInput
        })
        .then(() => {
            res.redirect("..");
        })
        .catch(() => {
            res.redirect("/discussTopic");
        });
});

module.exports = router;
