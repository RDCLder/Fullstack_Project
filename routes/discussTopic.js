const express = require("express");
const router = express.Router();
const db = require("../models/");

router.get('/discussTopic',(req,res)=>{
    res.render('discussTopic',{
        pageTitle: "Discuss Topic",
        isLoggedIn: false
    })
})

module.exports = router;