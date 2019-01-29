const express = require("express");
const router = express.Router();
const db = require("../models/");

router.get('/discussTopic',(req,res)=>{
    res.render('discussTopic',{
        pageTitle: "Discuss Topic",
        isLoggedIn: false,
        pageType: "discussTopic"

    });
});

router.post('/discussTopic',(req,res)=>{
    var title = req.body.title
    var body = req.body.body
    db.topic.create({
        title: title,
        body: body
    })
    .then(()=>{
        res.redirect('..')
    })
    .catch(()=>{
        res.redirect('/discussTopic')
    })
})
module.exports = router;