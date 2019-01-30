const express = require("express");
const router = express.Router();
const db = require("../models");
const body_parser = require("body-parser");

router.get("/createTopic", (req, res) => {
    if (!req.user) {
        res.redirect("/login")
    } else {

        db.community.findAll()
            .then(community => {
                // console.log(community);
                res.render("createTopic", {
                    pageTitle: "Discuss Topic",
                    pageID: "createTopic",
                    pageType: "submission",
                    communities: community,
                    isLoggedIn: true,
                    user: req.user
                });
            })

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
    var title = req.body.title;
    var body = req.body.body;
    // let shownVal = document.getElementById("communitySearchInput");
    // let community_id = document.querySelector("#communitySearch option[id='"+shownVal+"']").dataset.value;
    console.log(req.user);
    // db.community.findAll()
    // db.topic
    //     .create({
    //         title: title,
    //         body: body,
    //         community_id: $("#communitySearchInput").val,
    //         author_id: user.id
    //         // type: "",
    //     })
    //     .then(() => {
    //         res.redirect("..");
    //     })
    //     .catch(() => {
    //         res.redirect("/createTopic");
    //     });
});

module.exports = router;
