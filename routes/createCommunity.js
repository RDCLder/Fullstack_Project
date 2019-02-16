const express = require("express");
const router = express.Router();
const db = require("../models/");
var flash = require('connect-flash')
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(flash());

router.get('/createCommunity',(req, res)=>{
    console.log(req.user)
    if (!req.user) {
        res.redirect("/login");
    }
    else{
        res.render('createCommunity',{
            pageTitle: "Create a Community",
            pageID: "createCommunity",
            isLoggedIn: true,
            pageType: "createCommunity",
            user: req.user
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
    .then(()=>{
        res.redirect(`/community/${name}`);
    })
    .catch(()=>{
        res.redirect('/createCommunity');
    });

})

module.exports = router;