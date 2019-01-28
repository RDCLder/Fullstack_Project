const express = require("express");
const router = express.Router();
const db = require("../models/");

router.get("/topic/:topicID", (req, res) => {
    let topicID = req.params.topicID;

    // Query with Sequelize
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
            console.log(
                comment[0].dataValues.topic.dataValues.community.dataValues
            )
            if (!req.isAuthenticated()) {
                console.log("NOT AUTHENTICATED IN TOPIC!");
                res.render("topic", {
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
                console.log("AUTHENTICATED IN TOPIC!");
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