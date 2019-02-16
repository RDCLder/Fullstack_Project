const express = require("express");
const router = express.Router();
const db = require("../models");
const body_parser = require("body-parser");

// ----------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------

function createAndRedirect(req, res, type, community) {
    db.topic
    .create({
        title: req.body.title,
        body: req.body[type],
        community_id: community.id,
        author_id: req.user.id,
        type: type
    })
    .then(() => {
        db.topic.findAll({
            where: { title: req.body.title }
        }).then(topic => {
            let topicID = topic[0].dataValues.id;
            res.redirect(`/community/${community.name}/${topicID}`);
        })
    })
}

// ----------------------------------------------------------------------
// ROUTING
// ----------------------------------------------------------------------

router.get("/createTopic", (req, res) => {
    if (!req.user) {
        res.redirect("/login");
    } else {
        db.community.findAll().then(community => {
            res.render("createTopic", {
                pageTitle: "Discuss Topic",
                pageID: "createTopic",
                pageType: "submission",
                communities: community,
                isLoggedIn: true,
                user: req.user
            });
        });
    }
});

router.use(body_parser.urlencoded({ extended: false }));
router.post("/createTopic", (req, res) => {
    let communityName = req.body.communitySearchInput;
    db.community.findAll({where: { name: req.body.communitySearchInput }})
    .then(community => {
        community = community[0].dataValues;
        if (Object.keys(req.body).includes("text")) {
            createAndRedirect(req, res, "text", community);
        } else if (Object.keys(req.body).includes("media")) {
            createAndRedirect(req, res, "media", community);
        } else if (Object.keys(req.body).includes("link")) {
            createAndRedirect(req, res, "link", community);
        }
    })
    .catch(() => {
        res.redirect("back");
    })
});

module.exports = router;