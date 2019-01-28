const express = require("express");
const router = express.Router();
const db = require("../models/");

router.get("/community/:communityPage", (req, res) => {

    let communityPage = req.params.communityPage;

    // Query with Sequelize
    db.topic
        .findAll({
            include: [
                {
                    model: db.community,
                    required: true,
                    where: { name: communityPage }
                }
            ]
        })
        .then(topic => {
            if (topic.length > 0) {
                console.log(topic[0].dataValues);
                if (!req.isAuthenticated()) {
                    console.log("NOT AUTHENTICATED IN COMMUNITY!");
                    res.render("community", {
                        pageTitle: communityPage[0].toUpperCase() + communityPage.slice(1, communityPage.length),
                        pageID: communityPage,
                        topics: topic,
                        isLoggedIn: false
                    });
                }
                else {
                    console.log("AUTHENTICATED IN COMMUNITY!");
                    res.render("community", {
                        pageTitle: communityPage[0].toUpperCase() + communityPage.slice(1, communityPage.length),
                        pageID: communityPage,
                        topics: topic,
                        isLoggedIn: true,
                        user: req.user
                    });
                }
            }
            // else {
            //     res.redirect("/")
            // }
        });

    // Query with Postgres

    // db.query(`SELECT * FROM topic INNER JOIN community ON topic.community_id = community.id WHERE community.id = ${currentCommunity}`)
    //     .then(results => {

    //         console.log(results);
    //         if (!req.isAuthenticated()) {
    //             res.render("community", {
    //                 pageTitle: currentCommunity,
    //                 pageID: "community",
    //                 communityID: currentCommunity,
    //                 topics: results,
    //                 isLoggedIn: false
    //             });
    //         }
    //         else {
    //             console.log("You're authenticated!")
    //             res.render("community", {
    //                 pageTitle: currentCommunity,
    //                 pageID: "community",
    //                 communityID: currentCommunity,
    //                 topics: results,
    //                 isLoggedIn: true,
    //                 user: req.user
    //             });
    //         }
    //     })
});

module.exports = router;