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
    let communityName = req.body.communitySearchInput;
    db.community
        .findAll({
            where: { name: req.body.communitySearchInput }
        })
        .then(community => {
            community = community[0].dataValues;
            if (Object.keys(req.body).includes("textBody")) {
                db.topic
                .create({
                    title: req.body.title,
                    body: req.body.textBody,
                    community_id: community.id,
                    author_id: req.user.id,
                    type: "text"
                })
                .then(() => {
                    res.redirect(`/community/${communityName}`);
                })
            } else if (Object.keys(req.body).includes("mediaBody")) {
                db.topic
                .create({
                    title: req.body.title,
                    body: req.body.mediaBody,
                    community_id: community.id,
                    author_id: req.user.id,
                    type: "media"
                })
                .then(() => {
                    res.redirect(`/community/${communityName}`);
                })
            } else if (Object.keys(req.body).includes("linkBody")) {
                db.topic
                .create({
                    title: req.body.title,
                    body: req.body.linkBody,
                    community_id: community.id,
                    author_id: req.user.id,
                    type: "link"
                })
                .then(() => {
                    res.redirect(`/community/${communityName}`);
                })
            }
        })
        .catch((err) => {
            res.redirect("back");
        })
});

module.exports = router;