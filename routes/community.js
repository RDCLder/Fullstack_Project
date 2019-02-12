const express = require("express");
const router = express.Router();
const db = require("../models/");
const timeAgo = require("../functions/timeAgo");

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
            ],
            order: [["createdAt", "DESC"]]
        })
        .then(topic => {
            if (topic.length > 0) {

                let topicTimes = [];
                for (let i = 0; i < topic.length; i++) {
                    let timestamp = topic[i].dataValues.createdAt;
                    let topicTime = timeAgo(timestamp);
                    topicTimes.push(topicTime);
                }

                if (!req.user) {
                    res.render("community", {
                        pageTitle: communityPage,
                        pageID: communityPage,
                        pageType: "community",
                        topics: topic,
                        topicTimes: topicTimes,
                        noTopics: false,
                        isLoggedIn: false
                    });
                }
                else if (req.user) {
                    res.render("community", {
                        pageTitle: communityPage,
                        pageID: communityPage,
                        pageType: "community",
                        topics: topic,
                        topicTimes: topicTimes,
                        noTopics: false,
                        isLoggedIn: true,
                        user: req.user
                    });
                }
            } else {
                db.community.findAll({ where: { name: communityPage } })
                    .then(community => {
                        let topics = { community: community[0] };
                        // console.log(topics.community.dataValues.description);
                        if (!req.user) {
                            res.render("community", {
                                pageTitle: communityPage,
                                pageID: communityPage,
                                pageType: "community",
                                community: community[0].dataValues,
                                noTopics: true,
                                isLoggedIn: false
                            });
                        }
                        else if (req.user) {
                            res.render("community", {
                                pageTitle: communityPage,
                                pageID: communityPage,
                                pageType: "community",
                                community: community[0].dataValues,
                                noTopics: true,
                                isLoggedIn: true,
                                user: req.user
                            });
                        }
                    })
            }
        })
        .catch(() => {
            res.redirect("/404");
        });
});

module.exports = router;