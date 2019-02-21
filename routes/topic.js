const express = require("express");
const router = express.Router();
const db = require("../models/");
const body_parser = require("body-parser");
const timeAgo = require("../functions/timeAgo");

// router.get("/community/", (req, res) => {
//     res.redirect("/");
// });

router.get("/community/:communityName/:topicID", (req, res) => {

    let communityName = req.params.communityName;
    let topicID = req.params.topicID;
    var results = {};

    db.topic.findAll({
        include: [
            { model: db.community, where: { name: communityName }, required: true },
            { model: db.user, required: true }
        ],
        where: { id: topicID }
    }).then(topic => {
        results["topic"] = topic;
        db.comment.findAll({
            where: { topic_id: topic[0].dataValues.id },
            include: [
                { model: db.user, required: true }
            ]
        }).then(comments => {
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
        }).catch(err => {
            res.redirect(`/community/${communityName}`)
        })
    }).catch(err => {
        res.redirect(`/community/${communityName}`)
    })
});

router.use(body_parser.urlencoded({ extended: false }));
router.post("/community/:communityName/:topicID", (req, res) => {
    let communityName = req.params.communityName;
    let topicID = req.params.topicID;
    db.topic.findAll({
        where: { id: topicID }
    }).then(topic => {
        db.comment.create({
            body: req.body.submitComment,
            author_id: req.user.id,
            topic_id: topic[0].dataValues.id
        }).then(() => {
            db.topic.update(
                { updatedAt: new Date() },
                { where: { id: topicID } }
            )
        }).then(() => {
            res.redirect(`/community/${communityName}/${topicID}`);
        }).catch(err => {
            console.log(err);
        });
    })
});

module.exports = router;