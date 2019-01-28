const express = require("express");
const router = express.Router();
const db = require("./../models/");

router.get("/", (req, res) => {

    // if (!req.isAuthenticated()) {
    //     res.redirect("/login");
    //     return;
    // }
    // res.render("index",{
    //     pageTitle: "Home",
    //     pageID: "home",
    //     isLoggedIn: true,
    //     user:req.user
    // })
    // else if (req.isAuthenticated()){
    //     res.render("index",{
    //         pageTitle: "Home",
    //         pageID: "home",
    //         isLoggedIn: true,
    //         user:req.user
    //     })
    // }
    
    res.render("index", {
        pageTitle: "Home",
        pageID: "home",
        // isLoggedIn: req.isAuthenticated(),
        user: req.user
    });
});

module.exports = router;