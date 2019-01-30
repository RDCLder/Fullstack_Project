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
            console.log(comment);
            if (comment.length > 0) {
                if (!req.user) {
                    res.render("topic", {
                        // comment[0] is used because all comments will share the same topic & community
                        pageTitle: comment[0].dataValues.topic.title,
                        pageID: topicID,
                        pageType: "topic",
                        comments: comment,
                        topic: comment[0].dataValues.topic.dataValues,
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
                        topic: comment[0].dataValues.topic.dataValues,
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
                        if (!req.user) {
                            res.render("topic", {
                                pageTitle: topic.title,
                                pageID: topicID,
                                pageType: "topic",
                                comments: [],
                                topic: topic[0],
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