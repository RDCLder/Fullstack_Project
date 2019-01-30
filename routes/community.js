const express = require("express");
const router = express.Router();
const db = require("../models/");

router.get("/community", (req, res) => {
    res.redirect("/");
});

router.get("/community/:communityPage", (req, res) => {

    let communityPage = req.params.communityPage;

    db.topic
        .findAll({
            include: [
                {
                    model: db.community,
                    required: true,
                    where: { name: communityPage }
                },
                {
                    model: db.user,
                    required: true
                }
            ]
        })
        .then(topic => {
            if (topic.length > 0) {
                if (!req.user) {
                    res.render("community", {
                        pageTitle: communityPage,
                        pageID: communityPage,
                        pageType: "community",
                        topics: topic,
                        isLoggedIn: false
                    });
                }
                else if(req.user) {
                    res.render("community", {
                        pageTitle: communityPage,
                        pageID: communityPage,
                        pageType: "community",
                        topics: topic,
                        isLoggedIn: true,
                        user: req.user
                    });
                }
            } else {
                res.resdirect("/404");
            }
        })
        .catch(() => {
            res.redirect("/404");
        });
});

module.exports = router;