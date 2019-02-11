const express = require("express");
const router = express.Router();
const db = require("../models/");
const body_parser = require("body-parser");

router.get("/topic", (req, res) => {
    res.redirect("/");
});

router.get("/topic/:topicID", (req, res) => {
    let topicID = req.params.topicID;

    db.comment
        .findAll({
            include: [
                {
                    model: db.topic,
                    required: true,
                    where: { id: topicID },
                    include: [
                        {
                            model: db.community,
                            required: true
                        },
                        {
                            model: db.user,
                            required: true
                        }
                    ]
                },
                {
                    model: db.user,
                    required: true
                }
                // {
                //     model: db.comment,
                //     required: false
                // }
            ]
        })
        .then(comment => {
            if (comment.length > 0) {

                let timestamp = comment[0].dataValues.topic.dataValues.createdAt;
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
                let topicTime = ago;

                let commentTimes = [];
                for (let i = 0; i < comment.length; i++) {
                    
                    let timestamp2 = comment[i].dataValues.createdAt;
                    let timeDifference2 = Math.abs(currentTime.getTime() - timestamp2.getTime());
                    
                    if (timeDifference2 < 60000) {
                        var ago2 = "just now";
                    }
                    else if (60000 <= timeDifference2 && timeDifference2 < 3600000) {
                        let diffMinutes2 = Math.abs(Math.floor(timeDifference2 / (1000 * 60)));
                        var ago2 = `${diffMinutes2} minutes ago`;
                    }
                    else if (3600000 <= timeDifference2 && timeDifference2 < 86400000) {
                        let diffHours2 = Math.abs(Math.floor(timeDifference2 / (1000 * 60 * 60)));
                        var ago2 = `${diffHours2} hours ago`;
                    }
                    else if (86400000 <= timeDifference2 && timeDifference2 < 2592000000) {
                        let diffDays2 = Math.abs(Math.floor(timeDifference2 / (1000 * 60 * 60 * 24)));
                        var ago2 = `${diffDays2} days ago`;
                    }
                    else if (2592000000 <= timeDifference2 && timeDifference2 < 77760000000) {
                        let diffMonths2 = Math.abs(Math.floor(timeDifference2 / (1000 * 60 * 60 * 24 * 30)));
                        var ago2 = `${diffMonths2} months ago`;
                    }
                    else if (77760000000 <= timeDifference2) {
                        let diffYears2 = Math.abs(Math.floor(timeDifference2 / (1000 * 60 * 60 * 24 * 30 * 12)));
                        var ago2 = `${diffYears2} years ago`;
                    }
                    commentTimes.push(ago2);
                }
                console.log(commentTimes);
                
                if (!req.user) {
                    res.render("topic", {
                        // comment[0] is used because all comments will share the same topic & community
                        pageTitle: comment[0].dataValues.topic.title,
                        pageID: topicID,
                        pageType: "topic",
                        comments: comment,
                        commentTimes: commentTimes,
                        topic: comment[0].dataValues.topic.dataValues,
                        topicTime: topicTime,
                        community:
                            comment[0].dataValues.topic.dataValues.community.dataValues,
                        isLoggedIn: false
                    });
                } else {
                    res.render("topic", {
                        pageTitle: comment[0].dataValues.topic.title,
                        pageID: topicID,
                        pageType: "topic",
                        comments: comment,
                        commentTimes: commentTimes,
                        topic: comment[0].dataValues.topic.dataValues,
                        topicTime: topicTime,
                        community:
                            comment[0].dataValues.topic.dataValues.community.dataValues,
                        isLoggedIn: true,
                        user: req.user
                    });
                }
            } else {
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
                        where: { id: topicID }
                    })
                    .then(topic => {

                        let timestamp = topic[0].dataValues.createdAt;
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

                        if (!req.user) {
                            res.render("topic", {
                                pageTitle: topic.title,
                                pageID: topicID,
                                pageType: "topic",
                                comments: [],
                                topic: topic[0],
                                topicTime: ago,
                                community: topic[0].dataValues.community.dataValues,
                                isLoggedIn: false
                            });
                        } else {
                            res.render("topic", {
                                pageTitle: topic.title,
                                pageID: topicID,
                                pageType: "topic",
                                comments: [],
                                topic: topic[0],
                                topicTime: ago,
                                community: topic[0].dataValues.community.dataValues,
                                isLoggedIn: true,
                                user: req.user
                            });
                        }
                    });
            }
        });
});

router.use(body_parser.urlencoded({ extended: false }));
router.post("/topic/:topicID", (req, res) => {
    db.comment
        .create({
            body: req.body.submitComment,
            author_id: req.user.id,
            topic_id: req.params.topicID
        })
        .then(() => {
            res.redirect("back");
        })
        .catch(err => {
            console.log(err);
        });
});

module.exports = router;