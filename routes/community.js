const express = require("express");
const router = express.Router();
const db = require("../models/");
const timeAgo = require("../functions/timeAgo");

router.get("/community", (req, res) => {
    res.redirect("/");
});

router.get("/community/:communityPage", (req, res) => {

    let communityPage = req.params.communityPage;
    let results = {};

    db.community.findAll({
        where: { name: communityPage }
    })
        .then(community => {
            results["community"] = community;
            db.topic.findAll({
                where: { community_id: community[0].dataValues.id },
                include: [
                    { model: db.user, required: true }
                ],
                order: [["updatedAt", "DESC"]]
            })
                .then(topics => {
                    console.log(topics);
                    let topicTimes = [];
                    for (let i = 0; i < topics.length; i++) {
                        let topicStamp = topics[i].dataValues.createdAt;
                        topicTimes.push(timeAgo(topicStamp));
                    }

                    if (!req.user) {
                        res.render("community", {
                            pageTitle: communityPage,
                            pageID: communityPage,
                            pageType: "community",
                            community: community[0].dataValues,
                            topics: topics,
                            topicTimes: topicTimes,
                            isLoggedIn: false
                        });
                    }
                    else if (req.user) {
                        res.render("community", {
                            pageTitle: communityPage,
                            pageID: communityPage,
                            pageType: "community",
                            community: community[0].dataValues,
                            topics: topics,
                            topicTimes: topicTimes,
                            isLoggedIn: true,
                            user: req.user
                        });
                    }
                })
        })
        .catch(() => {
            res.redirect("/404");
        })
});

module.exports = router;