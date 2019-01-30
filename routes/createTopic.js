const express = require("express");
const router = express.Router();
const db = require("../models");
const body_parser = require("body-parser");

router.get("/createTopic", (req, res) => {
    if (!req.user) {
        res.redirect("/login");
    } else {
        db.community.findAll().then(community => {
            // console.log(community);
            res.render("createTopic", {
                pageTitle: "Discuss Topic",
                pageID: "createTopic",
                pageType: "submission",
                communities: community,
                isLoggedIn: true,
                user: req.user
            });
        });

        // res.render("createTopic", {
        //     pageTitle: "Discuss Topic",
        //     pageID: "createTopic",
        //     pageType: "submission",
        //     isLoggedIn: true,
        //     user: req.user
        // });
    }
});

router.use(body_parser.urlencoded({ extended: false }));
router.post("/createTopic", (req, res) => {
    db.community
        .findAll({
            where: { name: req.body.communitySearchInput }
        })
        .then(community => {
            community = community[0].dataValues;
            console.log(community);
            db.topic
                .create({
                    title: req.body.title,
                    body: req.body.body,
                    community_id: community.id,
                    author_id: req.user.id
                })
                .then(() => {
                    res.redirect(`/community/${community.name}`);
                })
                .catch(() => {
                    res.redirect("/createTopic");
                });
        });
});

module.exports = router;