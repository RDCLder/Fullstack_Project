const express = require("express");
const router = express.Router();
// const db = require("../models/database.js");

router.get('/community', (req,res) => {
    // if (!req.isAuthenticated()) {
    //     res.redirect("/login");
    //     return;
    // }
    // console.log(req.user.id);
    // res.send("you've arrived here, so you must be authenticated");
    res.render("community", {
        pageTitle: 'Communities',
        pageID: 'community'
    })
})
module.exports = router;