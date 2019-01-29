const express = require("express");
const router = express.Router();
const db = require("../models/");
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/createCommunity',(req, res)=>{
    console.log(req.user)
    if (!req.user) {
        console.log("NOT AUTHENTICATED IN CREATE COMMUNITY!");
        res.redirect("/login");
    }
    else{
        console.log("AUTHENTICATED IN CREATE COMMUNITY!");
        res.render('createCommunity',{
            pageTitle: "Create a Community",
            pageID: "createCommunity",
            isLoggedIn: false,
            pageType: "createCommunity"
        })
    }
})

router.post('/createCommunity',(req,res)=>{
    var name = req.body.name;
    var description = req.body.description;
    db.community.create({
        name: name,
        description: description
    })
    res.redirect('..')
})

module.exports = router;