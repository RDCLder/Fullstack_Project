const express = require("express");
const router = express.Router();
const db = require("../models/");

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
                    required: true,
                }
                // {
                //     model: db.comment,
                //     required: false
                // }
            ]
        })
        .then(comment => {
            console.log(comment);
            if (!req.user) {
                res.render("topic", {
                    // comment[0] is used because all comments will share the same topic & community
                    pageTitle: comment[0].dataValues.topic.title,
                    pageID: topicID,
                    pageType: "topic",
                    comments: comment,
                    topic: comment[0].dataValues.topic.dataValues,
                    community: comment[0].dataValues.topic.dataValues.community.dataValues,
                    isLoggedIn: false
                });
            }
            else {
                res.render("topic", {
                    pageTitle: comment[0].dataValues.topic.title,
                    pageID: topicID,
                    pageType: "topic",
                    comments: comment,
                    topic: comment[0].dataValues.topic.dataValues,
                    community: comment[0].dataValues.topic.dataValues.community.dataValues,
                    isLoggedIn: true,
                    user: req.user
                });
            }
        });
});

module.exports = router;