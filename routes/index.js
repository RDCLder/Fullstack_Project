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

                    let topicTimes = [];
                    for (let i = 0; i < topic.length; i++) {
                        let timestamp = topic[i].dataValues.createdAt;
                        let currentTime = new Date();
                        let timeDifference = Math.abs(currentTime.getTime() - timestamp.getTime());

                        if (timeDifference < 60000) {
                            var ago = "just now";
                        }
                        else if (60000 <= timeDifference && timeDifference < 3600000) {
                            let diffMinutes = Math.abs(Math.floor(timeDifference / (1000 * 60)));
                            var ago = `${diffMinutes} minutes ago`;
                        }
                        else if (3600000 <= timeDifference && timeDifference < 86400000) {
                            let diffHours = Math.abs(Math.floor(timeDifference / (1000 * 60 * 60)));
                            var ago = `${diffHours} hours ago`;
                        }
                        else if (86400000 <= timeDifference && timeDifference < 2592000000) {
                            let diffDays = Math.abs(Math.floor(timeDifference / (1000 * 60 * 60 * 24)));
                            var ago = `${diffDays} days ago`;
                        }
                        else if (2592000000 <= timeDifference && timeDifference < 77760000000) {
                            let diffMonths = Math.abs(Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30)));
                            var ago = `${diffMonths} months ago`;
                        }
                        else if (77760000000 <= timeDifference) {
                            let diffYears = Math.abs(Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30 * 12)));
                            var ago = `${diffYears} years ago`;
                        }
                        topicTimes.push(ago);
                    }

                    if (!req.user) {
                        res.render("index", {
                            pageTitle: "Home",
                            pageID: "index",
                            pageType: "index",
                            topics: topic,
                            topicTimes: topicTimes,
                            communities: community,
                            exploreCommunity: community[Math.floor(Math.random() * community.length)].dataValues.name,
                            isLoggedIn: false
                        });
                    } else {
                        res.render("index", {
                            pageTitle: "Home",
                            pageID: "index",
                            pageType: "index",
                            topics: topic,
                            topicTimes: topicTimes,
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
