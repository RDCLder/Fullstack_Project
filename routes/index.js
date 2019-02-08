const express = require("express");
const router = express.Router();
const db = require("./../models/");

router.get("/", (req, res) => {
    db.topic
        .findAll({
            include: [
                {
                    model: db.community,
                    required: true
                },
                {
                    model: db.user,
                    required: true
                }
            ],
            order: [["createdAt", "DESC"]]
        })
        .then(topic => {
            db.community.findAll({}).then(community => {
                if (topic.length > 0) {
                    if (!req.user) {
                        res.render("index", {
                            pageTitle: "Home",
                            pageID: "index",
                            pageType: "index",
                            topics: topic,
                            communities: community,
                            exploreCommunity: community[Math.floor(Math.random() * community.length)].dataValues.name,
                            isLoggedIn: false,
                            // user: {username: "test"}
                        });
                    } else {
                        res.render("index", {
                            pageTitle: "Home",
                            pageID: "index",
                            pageType: "index",
                            topics: topic,
                            communities: community,
                            exploreCommunity: community[Math.floor(Math.random() * community.length)].dataValues.name,
                            isLoggedIn: true,
                            user: req.user
                        });
                    }
                } else {
                    res.render("index", {
                        pageTitle: "Home",
                        pageID: "index",
                        pageType: "index",
                        topics: [],
                        isLoggedIn: false
                    });
                }
            });
        });
});

module.exports = router;
