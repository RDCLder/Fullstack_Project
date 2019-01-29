const express = require("express");
const router = express.Router();
const db = require("../models/");

router.get("/community", (req, res) => {
    res.redirect("/");
});

router.get("/community/:communityPage", (req, res) => {

    let communityPage = req.params.communityPage;

    db.topic
        .findAll({
            include: [
                {
                    model: db.community,
                    required: true,
                    where: { name: communityPage }
                },
                {
                    model: db.user,
                    required: true
                }
            ]
        })
        .then(topic => {
            if (topic.length > 0) {
                console.log(req.isAuthenticated());
                if (!req.user) {
                    console.log("NOT AUTHENTICATED IN COMMUNITY!");
                    res.render("community", {
                        pageTitle: communityPage[0].toUpperCase() + communityPage.slice(1, communityPage.length),
                        pageID: communityPage,
                        pageType: "community",
                        topics: topic,
                        isLoggedIn: false
                    });
                }
                else if(req.user) {
                    console.log("AUTHENTICATED IN COMMUNITY!");
                    res.render("community", {
                        pageTitle: communityPage[0].toUpperCase() + communityPage.slice(1, communityPage.length),
                        pageID: communityPage,
                        pageType: "community",
                        topics: topic,
                        isLoggedIn: true,
                        user: req.user
                    });
                }
            }
        });
});

module.exports = router;