const express = require("express");
const router = express.Router();
const db = require("../models/");
const body_parser = require("body-parser");
const timeAgo = require("../functions/timeAgo");

router.get("/topic", (req, res) => {
    res.redirect("/");
});

router.get("/topic/:topicID", (req, res) => {

    let topicID = req.params.topicID;
    var results = {};

    db.topic.findAll({
        include: [
            { model: db.community, required: true },
            { model: db.user, required: true }
        ],
        where: { id: topicID }
    })
    .then(topic => {
        results["topic"] = topic;
        db.comment.findAll({
            where: { topic_id: topicID },
            include: [
                { model: db.user, required: true }
            ]
        })
        .then(comments => {
            let topicStamp = results.topic[0].dataValues.createdAt;
            let topicTime = timeAgo(topicStamp);

            let commentTimes = [];
            for (let i = 0; i < comments.length; i++) {
                let commentStamp = comments[i].dataValues.createdAt;
                commentTimes.push(timeAgo(commentStamp));
            }

            if (!req.user) {
                res.render("topic", {
                    pageTitle: topic[0].dataValues.title,
                    pageID: topicID,
                    pageType: "topic",
                    comments: comments,
                    commentTimes: commentTimes,
                    topic: topic[0].dataValues,
                    topicTime: topicTime,
                    community: topic[0].dataValues.community.dataValues,
                    isLoggedIn: false
                });
            } else {
                res.render("topic", {
                    pageTitle: topic[0].dataValues.title,
                    pageID: topicID,
                    pageType: "topic",
                    comments: comments,
                    commentTimes: commentTimes,
                    topic: topic[0].dataValues,
                    topicTime: topicTime,
                    community: topic[0].dataValues.community.dataValues,
                    isLoggedIn: true,
                    user: req.user
                })
            }
        })
    })
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